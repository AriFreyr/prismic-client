import * as prismic from "@prismicio/client";
import fetch, { AbortError } from "node-fetch";

// AbortController was added in node v14.17.0 globally. If you are using a node
// version >=14.17.0, or are not in a node environment, remove this line.
import { AbortController } from "abort-controller";

const endpoint = prismic.getEndpoint("qwerty");
const client = prismic.createClient(endpoint, {
	fetch: async (url, options) => {
		// Create an AbortController. This will be used to cancel the
		// `fetch()` request if it does not resolve within the given
		// timespan.
		const controller = new AbortController();

		// After 1ms, cancel the `fetch()` request.
		// 1ms is used to force a timeout. In a real-world scenario,
		// something like 3000ms is more appropriate.
		const timeoutId = setTimeout(() => controller.abort(), 1);

		// Fetch the requested URL with the AbortController. If
		// `controller.abort()` is called, the `fetch()` request will
		// be cancelled.
		const res = await fetch(url, {
			signal: controller.signal,
			...options,
		});

		// We must stop the timeout once the `fetch()` request is
		// complete.
		clearTimeout(timeoutId);

		return res;
	},
});

// This query will throw if it does not resolve within the timeout duration.
const articles = await client.getAllByType("article");
console.info(articles);
// => A list of all `article` documents

// If you want to handle timeouts, you can check the error's type.
try {
	const articles = await client.getAllByType("article");
	console.info(articles);
} catch (error) {
	if (error instanceof AbortError) {
		console.error("The request timed out.");
	} else {
		throw error;
	}
}
