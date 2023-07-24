CREATE TABLE `Client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(512) NOT NULL,
  `address` varchar(512) DEFAULT NULL,
  `city` varchar(512) DEFAULT NULL,
  `province` varchar(512) DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `postal_code` varchar(512) DEFAULT NULL,
  `email` varchar(512) NOT NULL,
  `work_number` int(11) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `approver_name` varchar(512) DEFAULT NULL,
  `approver_email` varchar(512) DEFAULT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `Milestone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeof_milestone` varchar(512) DEFAULT NULL,
  `percentage` varchar(512) DEFAULT NULL,
  `priceof_milestone` varchar(512) DEFAULT NULL,
  `deadline` varchar(512) DEFAULT NULL,
  `reminder` varchar(512) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  `paid` tinyint(1) DEFAULT NULL,
  `project_id` int(11) DEFAULT NULL,
  `file_upload` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE `Project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(512) NOT NULL,
  `project_description` varchar(512) DEFAULT NULL,
  `project_cost` varchar(512) DEFAULT NULL,
  `project_deadline` varchar(512) DEFAULT NULL,
  `invoice_frequency` varchar(512) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `project_address` varchar(512) DEFAULT NULL,
  `city` varchar(512) DEFAULT NULL,
  `province` varchar(512) DEFAULT NULL,
  `country` varchar(512) DEFAULT NULL,
  `postal_code` varchar(512) DEFAULT NULL,
  `reminder_1` varchar(512) DEFAULT NULL,
  `reminder_2` varchar(512) DEFAULT NULL,
  `reminder_3` varchar(512) DEFAULT NULL,
  `proposal_file` text,
  `contract_file` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

