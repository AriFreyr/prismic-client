# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [6.0.0](https://github.com/prismicio/prismic-client/compare/v5.1.1...v6.0.0) (2022-01-05)

## [6.0.0-beta.5](https://github.com/prismicio/prismic-client/compare/v6.0.0-beta.4...v6.0.0-beta.5) (2021-12-21)


### Features

* ensure Prismic Rest API V2 endpoint is used ([#203](https://github.com/prismicio/prismic-client/issues/203)) ([18faf65](https://github.com/prismicio/prismic-client/commit/18faf65016de380838ed3ea74eb56cad201acf13))
* throw NotFoundError if repository does not exist ([bf7b862](https://github.com/prismicio/prismic-client/commit/bf7b862e6d7b8cbb3a9bb5fa4ccf334e5c72bca0))


### Documentation

* update README links [skip ci] ([298e062](https://github.com/prismicio/prismic-client/commit/298e06214eae3de69d4b54022398dd0087c6951c))


### Chore

* **deps:** update dependencies ([3c8414d](https://github.com/prismicio/prismic-client/commit/3c8414dac01a2ccc482b9f5cf88135e51c25aaee))

## [6.0.0-beta.4](https://github.com/prismicio/prismic-client/compare/v6.0.0-beta.3...v6.0.0-beta.4) (2021-12-03)


### Bug Fixes

* add predicate aliases for smoother upgrade path ([4a1f49c](https://github.com/prismicio/prismic-client/commit/4a1f49c147c68ba450478725b34cd432be5e2012))


### Chore

* **deps:** maintain dependencies ([6250df3](https://github.com/prismicio/prismic-client/commit/6250df3ecf768f8135fc13ef582eb10ef26b3f4e))

## [6.0.0-beta.3](https://github.com/prismicio/prismic-client/compare/v6.0.0-beta.2...v6.0.0-beta.3) (2021-11-09)


### Features

* throttle getAll* methods and rename getAll to dangerouslyGetAll ([#193](https://github.com/prismicio/prismic-client/issues/193)) ([4efdfa0](https://github.com/prismicio/prismic-client/commit/4efdfa0383e448e2d09c50c42804803358438b05))

## [6.0.0-beta.2](https://github.com/prismicio/prismic-client/compare/v6.0.0-beta.1...v6.0.0-beta.2) (2021-10-30)


### Bug Fixes

* revert to providing access token via URL parameter ([7a5140e](https://github.com/prismicio/prismic-client/commit/7a5140e7be1fca2c1ddf1ad34b14e16604c491c6))

## [6.0.0-beta.1](https://github.com/prismicio/prismic-client/compare/v6.0.0-beta.0...v6.0.0-beta.1) (2021-10-25)


### Features

* add `getBySomeTags`, rename `getByTags` to `getByEveryTag` ([#194](https://github.com/prismicio/prismic-client/issues/194)) ([37385dc](https://github.com/prismicio/prismic-client/commit/37385dc3a4e7eebd21e9b66077878c74dbe06294))
* extend all custom errors from PrismicError ([c4be6ce](https://github.com/prismicio/prismic-client/commit/c4be6ce17136361af79a1fca17c7c8fb3d258bcd))
* use authorization header for access token ([#192](https://github.com/prismicio/prismic-client/issues/192)) ([42af240](https://github.com/prismicio/prismic-client/commit/42af2405bb68e1763b6508deb3b3d86000b28fb0))


### Bug Fixes

* on getAll methods, use MAX_PAGE_SIZE when pageSize param is falsey ([#195](https://github.com/prismicio/prismic-client/issues/195)) ([46b638a](https://github.com/prismicio/prismic-client/commit/46b638acfb8f658d7272418fc927c664c9e0b72a))


### Chore

* **deps:** update dependencies ([e7dbd7f](https://github.com/prismicio/prismic-client/commit/e7dbd7f80e8676ea11989ce1ccc33073ae6df13b))
* mark package as side effect free ([dc02db7](https://github.com/prismicio/prismic-client/commit/dc02db7a3660e00473d59bb59e4e3926e98b4dcb))


### Refactor

* optimize code for bundle size ([#196](https://github.com/prismicio/prismic-client/issues/196)) ([9dc32e0](https://github.com/prismicio/prismic-client/commit/9dc32e0fa4ab47df222c328882517e041e8daad4))

## [6.0.0-beta.0](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.15...v6.0.0-beta.0) (2021-09-29)


### Chore

* **deps:** maintain dependencies ([312ce48](https://github.com/prismicio/prismic-client/commit/312ce489434abafa9a8322d79dd083ac1e5afe1f))
* update template config ([8dbc214](https://github.com/prismicio/prismic-client/commit/8dbc2148e72b861d701fa490910c47b25a96892a))

## [6.0.0-alpha.15](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.14...v6.0.0-alpha.15) (2021-09-14)


### Chore

* update @prismicio/types and @prismicio/helpers ([c4e00a1](https://github.com/prismicio/prismic-client/commit/c4e00a1d40907b1900979e5bbf2a3d5b6292fa6a))

## [6.0.0-alpha.14](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.13...v6.0.0-alpha.14) (2021-09-14)


### Chore

* update dependencies ([a383ec7](https://github.com/prismicio/prismic-client/commit/a383ec7f0552adf3895f4584c5809ffeae0b0cb7))

## [6.0.0-alpha.13](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.12...v6.0.0-alpha.13) (2021-09-10)


### Features

* add `getByUIDs` and `getAllByUIDs` ([52a8cc9](https://github.com/prismicio/prismic-client/commit/52a8cc9d491f10737086bb796b98fa767cefa890)), closes [#191](https://github.com/prismicio/prismic-client/issues/191)

## [6.0.0-alpha.12](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.11...v6.0.0-alpha.12) (2021-09-09)


### Features

* use API types from `@prismicio/types` ([632c2ae](https://github.com/prismicio/prismic-client/commit/632c2aeca484502546e880156e94600476f12314))


### Bug Fixes

* builds ([5f49827](https://github.com/prismicio/prismic-client/commit/5f49827d77b24cd0f0333e23c2306984ae821c94))
* use "ID" over "Id" in method names ([2bcdabf](https://github.com/prismicio/prismic-client/commit/2bcdabf829f309f856b757a3401aacae6856bba4))

## [6.0.0-alpha.11](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.10...v6.0.0-alpha.11) (2021-08-24)


### Features

* provide routes as top-level client options ([69f2002](https://github.com/prismicio/prismic-client/commit/69f2002a97c476bc7b7f9161ee81946f9e65a4c9))


### Chore

* update dependencies ([d70c228](https://github.com/prismicio/prismic-client/commit/d70c228a7902ea7a147e203d9c50a253ba6f033c))

## [6.0.0-alpha.10](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.9...v6.0.0-alpha.10) (2021-08-19)


### Chore

* update dependencies ([1d7723f](https://github.com/prismicio/prismic-client/commit/1d7723f1b102a4f5e77c38f596912a97df85e052))

## [6.0.0-alpha.9](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.8...v6.0.0-alpha.9) (2021-08-17)


### Bug Fixes

* allow optional Link Resolver in resolvePreviewURL ([4321921](https://github.com/prismicio/prismic-client/commit/43219210fad1fadf57365a77c5c5bce34e28baa3)), closes [#183](https://github.com/prismicio/prismic-client/issues/183)
* mark `resolvers` as optional in Routes ([d84658a](https://github.com/prismicio/prismic-client/commit/d84658aa3efd97b034b3cae6281f37b841d62f91))
* use "main" as primary branch ([c4c02e6](https://github.com/prismicio/prismic-client/commit/c4c02e6538dd00ad7324cbffdfa92c6deafbf20d))


### Chore

* revert previous commit ([a0cf5cb](https://github.com/prismicio/prismic-client/commit/a0cf5cb27ccad10076625d549d6b410b5f9f8dac))
* update dotfiles per standard template ([5f4dee0](https://github.com/prismicio/prismic-client/commit/5f4dee0a85ed64d20861c59abc6e6dce5a4a2933))
* update pull request template ([f618d62](https://github.com/prismicio/prismic-client/commit/f618d626aa74272b7c5a4f4da51c808e30617741))

## [6.0.0-alpha.8](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.7...v6.0.0-alpha.8) (2021-07-06)


### Bug Fixes

* support unauthorized repository response ([022d278](https://github.com/prismicio/prismic-client/commit/022d278fcb89ecc098e9729b5bf67ef87a9f8259))
* use access_token URL parameter over Authorization header ([#182](https://github.com/prismicio/prismic-client/issues/182)) ([4c44109](https://github.com/prismicio/prismic-client/commit/4c44109b8b4428341e6becc021b1888230e7e961))


### Chore

* **deps:** update examples dependencies ([1c8f2b2](https://github.com/prismicio/prismic-client/commit/1c8f2b2a73dc56aa055efdb7a0c8c10ada3e428f))

## [6.0.0-alpha.7](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.6...v6.0.0-alpha.7) (2021-07-03)


### Bug Fixes

* use `in` predicate for getByIDs ([fc522a2](https://github.com/prismicio/prismic-client/commit/fc522a22665f0ba461884c30ad5fb032b7910724))

## [6.0.0-alpha.6](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.5...v6.0.0-alpha.6) (2021-07-03)


### Chore

* update dependencies ([2a18d2e](https://github.com/prismicio/prismic-client/commit/2a18d2e52d78734dd2405f83677c6b221149910c))
* update dependencies ([eb9b13e](https://github.com/prismicio/prismic-client/commit/eb9b13e81bb6754597fa8df8948d0fafcd1ea042))

## [6.0.0-alpha.5](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.4...v6.0.0-alpha.5) (2021-06-27)


### Bug Fixes

* use @prismicio/helpers for resolvePreviewURL ([2db45d2](https://github.com/prismicio/prismic-client/commit/2db45d2eb67c335ea88838937f9e00696cd11b3a))

## [5.1.0](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.2...v5.1.0) (2021-06-11)

## [6.0.0-alpha.4](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.3...v6.0.0-alpha.4) (2021-06-23)


### Bug Fixes

* support global fetch if provided explicitly ([d22ae21](https://github.com/prismicio/prismic-client/commit/d22ae21483f967b4366d501f7e98934d6ee668bb))

## [6.0.0-alpha.3](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.2...v6.0.0-alpha.3) (2021-06-23)


### Features

* support Route Resolver with routes param ([063b5ee](https://github.com/prismicio/prismic-client/commit/063b5eec0399efd834c4c6142586b1cd54f44054))


### Bug Fixes

* resolve issue using global fetch ([83c6290](https://github.com/prismicio/prismic-client/commit/83c6290ec79a4f5bbecc1d2d9308816300101138)), closes [#180](https://github.com/prismicio/prismic-client/issues/180)
* throw if an invalid fetch function is given ([ec01c59](https://github.com/prismicio/prismic-client/commit/ec01c598c8a79049f843e9d47a3abd83043dd469))


### Refactor

* simplify SimpleTTLCache and add internal docs ([f255a27](https://github.com/prismicio/prismic-client/commit/f255a270ea1b7dc55979d2111ece9fedafb922c3))

## [6.0.0-alpha.2](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.1...v6.0.0-alpha.2) (2021-06-11)


### Features

* add wrapper errors ([3dfba0f](https://github.com/prismicio/prismic-client/commit/3dfba0f4fb013421db58217cb02a810dab2b5fcc)), closes [#177](https://github.com/prismicio/prismic-client/issues/177)
* return API error message on failed requests ([8de2873](https://github.com/prismicio/prismic-client/commit/8de287399fc919c097cd4d8a0bbc30f302092d51))


### Chore

* rename license file ([f496697](https://github.com/prismicio/prismic-client/commit/f4966979dbd02cd37a737ca982b1e6d2bb36ccc7))

## [6.0.0-alpha.1](https://github.com/prismicio/prismic-client/compare/v6.0.0-alpha.0...v6.0.0-alpha.1) (2021-06-07)


### Features

* [wip] cache master ref for a short period ([b73a7d0](https://github.com/prismicio/prismic-client/commit/b73a7d0ceb08d967f0552de7e1e38022243d3545))
* support cached refs for releases ([7a46513](https://github.com/prismicio/prismic-client/commit/7a46513b3e8595395e8bc57414431ea01131c2f0))


### Bug Fixes

* use cjs export to support non-esm ([63219e8](https://github.com/prismicio/prismic-client/commit/63219e8343552bed78fe4bdcf65470ea7cb9e885))


### Chore

* add test dir format script ([e4594f5](https://github.com/prismicio/prismic-client/commit/e4594f575d6b50be32381a00ff3ce9426bb70194))


### Documentation

* add internal comments ([61d4c14](https://github.com/prismicio/prismic-client/commit/61d4c149d7c99871edd8e803f39e6586d366f210))

## [5.0.0](https://github.com/prismicio/prismic-client/compare/v5.0.0-alpha.1...v5.0.0) (2021-05-27)


### Chore

* **release:** 5.0.0 fix ([ed15e96](https://github.com/prismicio/prismic-client/commit/ed15e963a0a05b7b8a276c14d0ff35c594ee36aa))

## [6.0.0-alpha.0](http://github.com/prismicio/prismic-client/compare/v5.0.0-alpha.1...v6.0.0-alpha.0) (2021-05-27)

## [5.0.0-alpha.1](http://github.com/prismicio/prismic-client/compare/v5.0.0-alpha.0...v5.0.0-alpha.1) (2021-05-27)


### Chore

* fix release script ([23bcc88](http://github.com/prismicio/prismic-client/commit/23bcc88bad570502f04e0e1fb997001cd0cc4584))

## [5.0.0-alpha.0](http://github.com/prismicio/prismic-client/compare/v4.0.0...v5.0.0-alpha.0) (2021-05-27)


### Features

* add "query from" methods and replace ref with release ([7d894a5](http://github.com/prismicio/prismic-client/commit/7d894a5a6e4512bc84d8fb1d8c57d72ccc895b56))
* add getAllByIDs ([297a70c](http://github.com/prismicio/prismic-client/commit/297a70ca53b9d7c9b5d40a0faf2e6c65c22c1a60))
* add getTags ([164c8d5](http://github.com/prismicio/prismic-client/commit/164c8d5972c6b7f0ad12ede8b1d27921b865f474))
* add initial client ([ee886bd](http://github.com/prismicio/prismic-client/commit/ee886bde37673dc25b6545d8ce2f971c81e026cd))
* add release-specific methods (wip) [skip ci] ([4f66405](http://github.com/prismicio/prismic-client/commit/4f6640565e854abdfadd4c3fb3577c49bd0a7d21))
* add resolvePreviewUrl ([53ed409](http://github.com/prismicio/prismic-client/commit/53ed409dc5418162a79f668fc6346c41d2c1a266))
* export HttpRequestLike ([96f1e1e](http://github.com/prismicio/prismic-client/commit/96f1e1ee4e66eb3bc72b520d15ca1af4bcb26c36))
* export predicates under root package ([18d742c](http://github.com/prismicio/prismic-client/commit/18d742c4e6476a22e23b9d860a50734b303c23a6))
* expose HTTPError ([fdf370a](http://github.com/prismicio/prismic-client/commit/fdf370aeda78f21a0b87dda699cabf41012298a1))
* restore form type ([c38e067](http://github.com/prismicio/prismic-client/commit/c38e067f74629ffa0a434de09e0d87499b6541ec))
* restore ref methods and scope release methods ([1ff8f72](http://github.com/prismicio/prismic-client/commit/1ff8f72b0c74847d87e23bce84dc666e5ac0808f))
* use normalized HTTPError ([0eb9fab](http://github.com/prismicio/prismic-client/commit/0eb9fabe98b46db73fc31847213935a787b23a85))


### Bug Fixes

* asc orderings direction should not be included in query ([46431fd](http://github.com/prismicio/prismic-client/commit/46431fde2e8c28c7bbc7b2439dd343e4f1560f34))
* clone responses for better cache support ([67ef2ba](http://github.com/prismicio/prismic-client/commit/67ef2ba909024e27ca418e8c9134e61eca848400))
* correct typings and predicate generation fn ([c81da44](http://github.com/prismicio/prismic-client/commit/c81da442129b5d001e6defe6d8bee9a39ab9951f))
* export types using `export type` ([a1fad4a](http://github.com/prismicio/prismic-client/commit/a1fad4ab0278f9501e6a35e56bc89dd6739cba30))
* getByIds should return paginated results ([fb94561](http://github.com/prismicio/prismic-client/commit/fb9456125da0721a80295e2f556cf4b07b368e70))
* ignore nullish ordering param ([51e53b7](http://github.com/prismicio/prismic-client/commit/51e53b7304a4b804f14e0cc4b41448598fcec997))
* use correct uid predicate for getByUID ([5735d28](http://github.com/prismicio/prismic-client/commit/5735d28e48645f2bf83970a3fd3d359f1bfe0e11))
* widen types of fetch-related APIs ([412205b](http://github.com/prismicio/prismic-client/commit/412205b9bf14473ab5a85988e5b986b09544d5e3))


### Documentation

* add comment to server-usage example ([b04d359](http://github.com/prismicio/prismic-client/commit/b04d35934c42b752776c22f75ecc001148369053))
* add custom-caching README ([ec26d6a](http://github.com/prismicio/prismic-client/commit/ec26d6a958cf55a77f5345f26622f1052895ae91))
* add examples ([62004a0](http://github.com/prismicio/prismic-client/commit/62004a0e72ff8368890dc83bf0aa9bb6cb86b79b))
* add multiple-languages example ([9d9592d](http://github.com/prismicio/prismic-client/commit/9d9592dbab0c2c34142adefaddb0c11cb4cdd1b5))
* add server-usage example ([c4b2e2f](http://github.com/prismicio/prismic-client/commit/c4b2e2f5228819dcb70f2be0407a8adf669a18be))
* add TSDoc for all client methods ([01cd9d9](http://github.com/prismicio/prismic-client/commit/01cd9d993ea4c685f4d04ec87a68fa553fe08a61))
* add TSDocs for client instance properties ([15d0187](http://github.com/prismicio/prismic-client/commit/15d0187be1aa4eeb337e6958044a7667eb4ad487))
* add TSDocs to remaining functions ([38052d2](http://github.com/prismicio/prismic-client/commit/38052d28a00b87966704d34b1ef5b87cba611da1))
* add with-typescript example ([5c7f396](http://github.com/prismicio/prismic-client/commit/5c7f396c350f25c9fb371dbf45a5a0f4a30fcbc6))
* describe internal predicate functions [skip ci] ([e4fed22](http://github.com/prismicio/prismic-client/commit/e4fed221e5f1b5c7562772079ed7233daa5be52a))
* fix badges ([7fd6541](http://github.com/prismicio/prismic-client/commit/7fd6541b73cbc985212798448f72436355fa8e5b))
* fix orderings parameter sketch ([0f43762](http://github.com/prismicio/prismic-client/commit/0f43762b5f8b99158370b999f56110aa3b5c4adf))
* more descriptive getResolvedRefString comment [skip ci] ([d9ae04b](http://github.com/prismicio/prismic-client/commit/d9ae04b4dfe830291cef0b7c0a38f7766b1928ea))
* new kit name typos fixes [#152](http://github.com/prismicio/prismic-client/issues/152) ([873bd58](http://github.com/prismicio/prismic-client/commit/873bd58befd26e2a3e8f6dca09d07c16303f00dd))
* refactor custom-caching example ([9dd2daa](http://github.com/prismicio/prismic-client/commit/9dd2daae2fd5839838b7ac60bd725bc51a293ff8))
* remove inaccurate docs ([974d160](http://github.com/prismicio/prismic-client/commit/974d160f99d9e12fa99e6c1df85f562837ec31d8))
* replace remaining usage of [@see](http://github.com/see) with [@link](http://github.com/link) ([02feadc](http://github.com/prismicio/prismic-client/commit/02feadc5b0c766562d0f03b2b98faac39ecacbc6))
* update comment wording ([3535c32](http://github.com/prismicio/prismic-client/commit/3535c32f73b34524bb88ab443342251eac70ca1c))
* update README ([1a9c5b8](http://github.com/prismicio/prismic-client/commit/1a9c5b8ee8f915e05d4ad8fd896364e28341acb1))
* use {[@link](http://github.com/link)} and [@type](http://github.com/type)Param ([2d2a2c5](http://github.com/prismicio/prismic-client/commit/2d2a2c545cb80fc0f43e06627d4f15bd3a212da8))


### Refactor

* assume the cookie store is always a string ([5d563b0](http://github.com/prismicio/prismic-client/commit/5d563b004bdcb131292282ed7549bb324e0111f2))
* client ([f0c5206](http://github.com/prismicio/prismic-client/commit/f0c5206e8fe8f10fb4a415fa81e26dd68fba02f5))
* explicitly export types ([b5b34fe](http://github.com/prismicio/prismic-client/commit/b5b34feb58b7efcfd0c249c5fb2ad7609700bb6d))
* export all in root ([2bdfd3f](http://github.com/prismicio/prismic-client/commit/2bdfd3ff8f40897b7606f00846a5a75b55a1f7bd))
* internal predicate fns for readability ([731a444](http://github.com/prismicio/prismic-client/commit/731a444e81d9506328e0b36f6710c5c3e8922638))
* remove ref methods ([a333921](http://github.com/prismicio/prismic-client/commit/a3339217a71215a0b1017a35a99b1b395a433884))
* remove unnecessary abstraction ([d976a11](http://github.com/prismicio/prismic-client/commit/d976a11e2188e1426df7795f1bd32f3c2978253e))
* revert tags refactor ([0240a18](http://github.com/prismicio/prismic-client/commit/0240a18103166fbaf0c866bccdba1a8f68065bfe))
* share code among tags and ref fns ([5c9e7ea](http://github.com/prismicio/prismic-client/commit/5c9e7ead0c47269e9df1da45048d6eb0a294a9c3))
* share fetch types ([a91a6c3](http://github.com/prismicio/prismic-client/commit/a91a6c3136057e38404cfd8066078fc0d4a19c91))
* use @prismicio/types where possible ([bb2b514](http://github.com/prismicio/prismic-client/commit/bb2b5149a9e8b647f93d25e63f53edb43788a52c))


### Chore

* **deps:** bump @prismicio/types ([a21a8fd](http://github.com/prismicio/prismic-client/commit/a21a8fdfc80b56fdda9321db9e2e1e482ffe0599))
* add .editorconfig ([535206a](http://github.com/prismicio/prismic-client/commit/535206a4c812718ce7bfe8db7c08aec4d64c0eb8))
* add code coverage via nyc ([7c2643b](http://github.com/prismicio/prismic-client/commit/7c2643b92f53600f866135a3848b369e5ead6d1e))
* add commitlint for conventional commits ([81107c0](http://github.com/prismicio/prismic-client/commit/81107c0056c967f9923e5e39e34df69069aa16c3))
* add examples ([4163944](http://github.com/prismicio/prismic-client/commit/4163944769e49e5b0c2463796022bdfc4dbff92c))
* add LICENSE.md ([b5e77a6](http://github.com/prismicio/prismic-client/commit/b5e77a6386aed57864b849871f11fb19d5bcfec0))
* add release scripts ([515722d](http://github.com/prismicio/prismic-client/commit/515722d75ef1276b7be3be63de20b33d7608b6bb))
* add simple example to README [skip ci] ([a384c8f](http://github.com/prismicio/prismic-client/commit/a384c8fda9e6f58213a51dbff25017cb023a93ee))
* add status to README [skip ci] ([865362e](http://github.com/prismicio/prismic-client/commit/865362ede32f610f6f3b262004afffc3227b8f1b))
* add test CI ([5856481](http://github.com/prismicio/prismic-client/commit/5856481fce1772d332db3e4e4cd7345fbde31944))
* add TODO to migrate to @prismicio/types when ready ([5f2c580](http://github.com/prismicio/prismic-client/commit/5f2c58047d5bae99b7c5f1063fda872c9aba4c49))
* add TODO to widen fetch type ([f8dcee9](http://github.com/prismicio/prismic-client/commit/f8dcee9608015b285957fbf529e6829d470af663))
* bootstrap v5 ([107ca1b](http://github.com/prismicio/prismic-client/commit/107ca1bc6e882bf667b4c926e20bbb106676aafe))
* fix nyc ([5bb1f23](http://github.com/prismicio/prismic-client/commit/5bb1f23cd9a82509e7e50a370c9ed4f32b557ef5))
* fix package.json version ([757a46d](http://github.com/prismicio/prismic-client/commit/757a46dc5de56333d25f044905f01151aa6df4cf))
* maintain dependencies ([0482128](http://github.com/prismicio/prismic-client/commit/0482128fc10b9a2612a5abb04b0bceeeb4e79ec2))
* mirror @prismicio/helpers project config ([155065e](http://github.com/prismicio/prismic-client/commit/155065eed7f8e0aac99646cbef650dc67b8ddda0))
* move git-simple-hooks config ([c17d070](http://github.com/prismicio/prismic-client/commit/c17d070214ce5c4bea74ae5fb38ef868fb6e2fe3))
* new README ([5694f3b](http://github.com/prismicio/prismic-client/commit/5694f3bc28907eeb3dbb67b44ce99168d3bf1f81))
* update dependencies ([508df11](http://github.com/prismicio/prismic-client/commit/508df11a0dccf157ea449512701f211fe11834d6))
* update dotfiles to match repo ([79017f4](http://github.com/prismicio/prismic-client/commit/79017f427eb8c2af44f4f091db482b4af6f72510))
* update IDEAS based on feedback ([8bd6754](http://github.com/prismicio/prismic-client/commit/8bd6754f7611abda8e20e3c72f5507874baa8762))
* upgrade dependencies ([7cb449a](http://github.com/prismicio/prismic-client/commit/7cb449afd5fae189ae4602f1509ff1694a151bce))
* upgrade dev dependencies ([cb167e4](http://github.com/prismicio/prismic-client/commit/cb167e4c615a32fb683f273067828d8295a4c46a))
