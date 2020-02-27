# A table to hold the product types
create table product_type (
	id int(11) unsigned not null auto_increment primary key,
	name varchar(255) not null unique,
	description text,
	prettyName varchar(255),
	default_thumbnail varchar(255) comment "This image is used when the individual product has no image",
	created_at timestamp,
	updated_at timestamp
);

# Holds the data for each product. This is not that individual instances of a product
create table product (
	id int(11) unsigned not null auto_increment primary key,
	name varchar(255) not null,
	description text,
	type int(11) unsigned not null,
	thumbnail varchar(255) default "",
	active tinyint(1) unsigned not null default 0,
	created_at timestamp,
	updated_at timestamp
);

