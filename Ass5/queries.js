var teachingQuery = 'select * from teaching';

var query1 = 
`
create or replace view coursesView as 
select * from course as c
order by credits
limit 3;
`;

var query2 = 
`
select * from coursesView;
`;


module.exports = {
    teachingQuery, query1, query2
};