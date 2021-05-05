import test from 'ava'

import { isTitleMacro } from '../__testutils__/isTitleMacro'

import * as predicate from '../../src/predicate'

test(
  '[date.after(document.first_publication_date, "2017-05-18T17:00:00-0500")]',
  isTitleMacro,
  predicate.dateAfter(
    'document.first_publication_date',
    '2017-05-18T17:00:00-0500',
  ),
)

test(
  '[date.after(document.last_publication_date, 1495080000000)]',
  isTitleMacro,
  predicate.dateAfter('document.last_publication_date', 1495080000000),
)

test(
  '[date.after(my.article.release-date, "2017-01-22")]',
  isTitleMacro,
  predicate.dateAfter('my.article.release-date', '2017-01-22'),
)

test(
  '[date.after(my.article.release-date, 1485043200000)]',
  isTitleMacro,
  predicate.dateAfter('my.article.release-date', Date.parse('2017-01-22')),
)

test(
  '[date.before(document.first_publication_date, "2016-09-19T14:00:00-0400")]',
  isTitleMacro,
  predicate.dateBefore(
    'document.first_publication_date',
    '2016-09-19T14:00:00-0400',
  ),
)

test(
  '[date.before(document.last_publication_date, 1476504000000)]',
  isTitleMacro,
  predicate.dateBefore('document.last_publication_date', 1476504000000),
)

test(
  '[date.before(my.post.date, "2017-02-24")]',
  isTitleMacro,
  predicate.dateBefore('my.post.date', '2017-02-24'),
)

test(
  '[date.before(my.post.date, 1487894400000)]',
  isTitleMacro,
  predicate.dateBefore('my.post.date', Date.parse('2017-02-24')),
)

test(
  '[date.between(document.first_publication_date, "2017-01-16", "2017-01-20")]',
  isTitleMacro,
  predicate.dateBetween(
    'document.first_publication_date',
    '2017-01-16',
    '2017-01-20',
  ),
)

test(
  '[date.between(document.last_publication_date, "2016-09-15T05:30:00+0100", "2017-10-15T11:45:00+0100")]',
  isTitleMacro,
  predicate.dateBetween(
    'document.last_publication_date',
    '2016-09-15T05:30:00+0100',
    '2017-10-15T11:45:00+0100',
  ),
)

test(
  '[date.between(my.query-fields.date, 1483074000000, 1483333200000)]',
  isTitleMacro,
  predicate.dateBetween('my.query-fields.date', 1483074000000, 1483333200000),
)

test(
  '[date.between(my.query-fields.date, 1583074000000, 1583333200000)]',
  isTitleMacro,
  predicate.dateBetween(
    'my.query-fields.date',
    new Date(1583074000000),
    new Date(1583333200000),
  ),
)

test(
  '[date.day-of-month(document.first_publication_date, 22)]',
  isTitleMacro,
  predicate.dateDayOfMonth('document.first_publication_date', 22),
)

test(
  '[date.day-of-month(document.last_publication_date, 30)]',
  isTitleMacro,
  predicate.dateDayOfMonth('document.last_publication_date', 30),
)

test(
  '[date.day-of-month(my.post.date, 14)]',
  isTitleMacro,
  predicate.dateDayOfMonth('my.post.date', 14),
)

test(
  '[date.day-of-month-after(document.first_publication_date, 22)]',
  isTitleMacro,
  predicate.dateDayOfMonthAfter('document.first_publication_date', 22),
)

test(
  '[date.day-of-month-after(document.last_publication_date, 10)]',
  isTitleMacro,
  predicate.dateDayOfMonthAfter('document.last_publication_date', 10),
)

test(
  '[date.day-of-month-after(my.event.date-and-time, 15)]',
  isTitleMacro,
  predicate.dateDayOfMonthAfter('my.event.date-and-time', 15),
)

test(
  '[date.day-of-month-before(document.first_publication_date, 20)]',
  isTitleMacro,
  predicate.dateDayOfMonthBefore('document.first_publication_date', 20),
)

test(
  '[date.day-of-month-before(document.last_publication_date, 10)]',
  isTitleMacro,
  predicate.dateDayOfMonthBefore('document.last_publication_date', 10),
)

test(
  '[date.day-of-month-before(my.blog-post.release-date, 23)]',
  isTitleMacro,
  predicate.dateDayOfMonthBefore('my.blog-post.release-date', 23),
)

test(
  '[date.day-of-week(document.first_publication_date, "monday")]',
  isTitleMacro,
  predicate.dateDayOfWeek('document.first_publication_date', 'monday'),
)

test(
  '[date.day-of-week(document.last_publication_date, "sun")]',
  isTitleMacro,
  predicate.dateDayOfWeek('document.last_publication_date', 'sun'),
)

test(
  '[date.day-of-week(my.concert.show-date, "Friday")]',
  isTitleMacro,
  predicate.dateDayOfWeek('my.concert.show-date', 'Friday'),
)

test(
  '[date.day-of-week(my.concert.show-date, 5)]',
  isTitleMacro,
  predicate.dateDayOfWeek('my.concert.show-date', 5),
)

test(
  '[date.day-of-week-after(document.first_publication_date, "fri")]',
  isTitleMacro,
  predicate.dateDayOfWeekAfter('document.first_publication_date', 'fri'),
)

test(
  '[date.day-of-week-after(document.last_publication_date, "Thu")]',
  isTitleMacro,
  predicate.dateDayOfWeekAfter('document.last_publication_date', 'Thu'),
)

test(
  '[date.day-of-week-after(my.blog-post.date, "tuesday")]',
  isTitleMacro,
  predicate.dateDayOfWeekAfter('my.blog-post.date', 'tuesday'),
)

test(
  '[date.day-of-week-after(my.blog-post.date, 2)]',
  isTitleMacro,
  predicate.dateDayOfWeekAfter('my.blog-post.date', 2),
)

test(
  '[date.day-of-week-before(document.first_publication_date, "Wed")]',
  isTitleMacro,
  predicate.dateDayOfWeekBefore('document.first_publication_date', 'Wed'),
)

test(
  '[date.day-of-week-before(document.last_publication_date, "saturday")]',
  isTitleMacro,
  predicate.dateDayOfWeekBefore('document.last_publication_date', 'saturday'),
)

test(
  '[date.day-of-week-before(my.page.release-date, "Saturday")]',
  isTitleMacro,
  predicate.dateDayOfWeekBefore('my.page.release-date', 'Saturday'),
)

test(
  '[date.day-of-week-before(my.page.release-date, 6)]',
  isTitleMacro,
  predicate.dateDayOfWeekBefore('my.page.release-date', 6),
)

test(
  '[date.month(document.first_publication_date, "august")]',
  isTitleMacro,
  predicate.dateMonth('document.first_publication_date', 'august'),
)

test(
  '[date.month(document.last_publication_date, "Sep")]',
  isTitleMacro,
  predicate.dateMonth('document.last_publication_date', 'Sep'),
)

test(
  '[date.month(my.blog-post.date, 1)]',
  isTitleMacro,
  predicate.dateMonth('my.blog-post.date', 1),
)

test(
  '[date.month-after(document.first_publication_date, "February")]',
  isTitleMacro,
  predicate.dateMonthAfter('document.first_publication_date', 'February'),
)

test(
  '[date.month-after(document.last_publication_date, 6)]',
  isTitleMacro,
  predicate.dateMonthAfter('document.last_publication_date', 6),
)

test(
  '[date.month-after(my.article.date, "oct")]',
  isTitleMacro,
  predicate.dateMonthAfter('my.article.date', 'oct'),
)

test(
  '[date.month-before(document.first_publication_date, 8)]',
  isTitleMacro,
  predicate.dateMonthBefore('document.first_publication_date', 8),
)

test(
  '[date.month-before(document.last_publication_date, "june")]',
  isTitleMacro,
  predicate.dateMonthBefore('document.last_publication_date', 'june'),
)

test(
  '[date.month-before(my.blog-post.release-date, "Sep")]',
  isTitleMacro,
  predicate.dateMonthBefore('my.blog-post.release-date', 'Sep'),
)

test(
  '[date.year(document.first_publication_date, 2016)]',
  isTitleMacro,
  predicate.dateYear('document.first_publication_date', 2016),
)

test(
  '[date.year(document.last_publication_date, 2017)]',
  isTitleMacro,
  predicate.dateYear('document.last_publication_date', 2017),
)

test(
  '[date.year(my.employee.birthday, 1986)]',
  isTitleMacro,
  predicate.dateYear('my.employee.birthday', 1986),
)

test(
  '[date.hour(document.first_publication_date, 12)]',
  isTitleMacro,
  predicate.dateHour('document.first_publication_date', 12),
)

test(
  '[date.hour(document.last_publication_date, 8)]',
  isTitleMacro,
  predicate.dateHour('document.last_publication_date', 8),
)

test(
  '[date.hour(my.event.date-and-time, 19)]',
  isTitleMacro,
  predicate.dateHour('my.event.date-and-time', 19),
)

test(
  '[date.hour-after(document.first_publication_date, 21)]',
  isTitleMacro,
  predicate.dateHourAfter('document.first_publication_date', 21),
)

test(
  '[date.hour-after(document.last_publication_date, 8)]',
  isTitleMacro,
  predicate.dateHourAfter('document.last_publication_date', 8),
)

test(
  '[date.hour-after(my.blog-post.releaseDate, 16)]',
  isTitleMacro,
  predicate.dateHourAfter('my.blog-post.releaseDate', 16),
)

test(
  '[date.hour-before(document.first_publication_date, 10)]',
  isTitleMacro,
  predicate.dateHourBefore('document.first_publication_date', 10),
)

test(
  '[date.hour-before(document.last_publication_date, 12)]',
  isTitleMacro,
  predicate.dateHourBefore('document.last_publication_date', 12),
)

test(
  '[date.hour-before(my.event.dateAndTime, 12)]',
  isTitleMacro,
  predicate.dateHourBefore('my.event.dateAndTime', 12),
)
