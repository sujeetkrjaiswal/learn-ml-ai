# Introduction

## Data Warehouse

- Subject-oriented: A data warehouse should contain information about a few well-defined subjects rather than the enterprise.
- Integrated repository: A data warehouse is an integrated repository of data.
It contains information from various systems within an organisation.
- Non-volatile: The data values in a database cannot be changed without a valid reason.
- Time-variant: A data warehouse contains historical data for analysis.

> A Data warehouse has Facts and Dimensions.

Basically, facts are the numerical data in a data warehouse and dimensions are the metadata (that is, data explaining some other data) attached to the fact variables. Both facts and dimensions are equally important for generating actionable insights from a data set.

Facts and dimensions are the two key elements of dimension modelling. Now, a typical problem might involve multiple databases with many different variables, and we may not be interested in all of them. Hence, only some facts and dimensions are combined in a specific manner to build the structure of a data warehouse, called a `schema diagram`.

A schema is an outline of the entire data warehouse. It shows how different data sets are connected and how the different attributes of each data set are used for the data warehouse.

There are four types of schemas are available in data warehouse. Out of which the `star schema` is mostly used in the data warehouse designs. The second mostly used data warehouse schema is snow `flake schema`.

### Schema Types

- __*Star Schema*__: A star schema is the one in which a central fact table is surrounded by denormalized dimensional tables. A star schema can be simple or complex. A simple star schema consists of one fact table where as a complex star schema have more than one fact table.
- __*Snow Flake Schema*__: A snow flake schema is an enhancement of star schema by adding additional dimensions. Snow flake schema are useful when there are low cardinality attributes in the dimensions.
- __*Galaxy Schema*__: Galaxy schema contains many fact tables with some common dimensions (conformed dimensions). This schema is a combination of many data marts.
- __*Fact Constellation Schema*__: The dimensions in this schema are segregated into independent dimensions based on the levels of hierarchy. For example, if geography has five levels of hierarchy like teritary, region, country, state and city; constellation schema would have five dimensions instead of one.

### OLTP vs OLAP

- Workload
  - Data warehouses are designed to accommodate ad hoc queries. You might not know the workload of your data warehouse in advance, so a data warehouse should be optimized to perform well for a wide variety of possible query operations.
  - OLTP systems support only predefined operations. Your applications might be specifically tuned or designed to support only these operations.
- Data modifications
  - A data warehouse is updated on a regular basis by the ETL process (run nightly or weekly) using bulk data modification techniques. The end users of a data warehouse do not directly update the data warehouse.
  - In OLTP systems, end users routinely issue individual data modification statements to the database. The OLTP database is always up to date, and reflects the current state of each business transaction.
- Schema design
  - Data warehouses often use denormalized or partially denormalized schemas (such as a star schema) to optimize query performance.
  - OLTP systems often use fully normalized schemas to optimize update/insert/delete performance, and to guarantee data consistency.
- Typical operations
  - A typical data warehouse query scans thousands or millions of rows. For example, "Find the total sales for all customers last month."
  - A typical OLTP operation accesses only a handful of records. For example, "Retrieve the current order for this customer."
- Historical data
  - Data warehouses usually store many months or years of data. This is to support historical analysis.
  - OLTP systems usually store data from only a few weeks or months. The OLTP system stores only historical data as needed to successfully meet the requirements of the current transaction.

## Lifecycle of Analytical System: SETL

For Data warehouse, one of the major task is SETL.

SETL - Select, Extract, Transform and Load.

- Select - Identification of the data that you want to analyse
- Extract - Connecting to the particular data source and pulling out the data
- Transform - Modifying the extracted data to standardise it
- Load - Push the data into the data warehouse

## Related terminologies

- DSS (Decision Support System)
- MIS (Managment Information System)

## References

- [Oracle Data Warehouse Concepts](https://docs.oracle.com/cd/B10501_01/server.920/a96520/concept.htm)
- [OLTP vs OLAP](https://www.datawarehouse4u.info/OLTP-vs-OLAP.html)
- [Oracle Docs - ETL](https://docs.oracle.com/cd/B10501_01/server.920/a96520/ettoverv.htm#1020)
- [Types of schema](https://www.folkstalk.com/2010/01/data-warehouse-dimensional-modelling.html)
