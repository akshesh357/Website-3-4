-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2017 at 10:15 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `groom`
--

CREATE TABLE `groom` (
  `groom_id` int(11) NOT NULL,
  `groom_name` varchar(100) NOT NULL,
  `groom_contact_details` int(11) NOT NULL,
  `groom_address` varchar(200) NOT NULL,
  `groom_image` varchar(200) NOT NULL,
  `groom_description` longtext NOT NULL,
  `groom_link_url` varchar(100) NOT NULL,
  `groom_link_text` longtext NOT NULL,
  `groom_pet_type` varchar(100) NOT NULL,
  `groom_mobile_grooming` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pet_type`
--

CREATE TABLE `pet_type` (
  `pet_type_id` int(11) NOT NULL,
  `pet_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `provider`
--

CREATE TABLE `provider` (
  `provider_id` int(11) NOT NULL,
  `provider_name` varchar(100) NOT NULL,
  `provider_contact_details` int(11) NOT NULL,
  `provider_address` varchar(200) NOT NULL,
  `provider_image` varchar(200) NOT NULL,
  `provider_description` longtext NOT NULL,
  `provider_link_url` varchar(100) NOT NULL,
  `provider_link_text` longtext NOT NULL,
  `pet_type_id` int(11) NOT NULL,
  `provider_emergency` tinyint(1) NOT NULL,
  `provider_mobile_grooming` tinyint(1) NOT NULL,
  `provider_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `provider_type`
--

CREATE TABLE `provider_type` (
  `provider_type_id` int(11) NOT NULL,
  `provider_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pet_name` varchar(100) NOT NULL,
  `pet_type_id` int(11) NOT NULL,
  `zipcode` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_service_provider`
--

CREATE TABLE `user_service_provider` (
  `usp_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `provider_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `vet`
--

CREATE TABLE `vet` (
  `vet_id` int(11) NOT NULL,
  `vet_name` varchar(100) NOT NULL,
  `vet_contact_details` int(11) NOT NULL,
  `vet_address` varchar(200) NOT NULL,
  `vet_image` varchar(200) NOT NULL,
  `vet_description` longtext NOT NULL,
  `vet_link_url` varchar(100) NOT NULL,
  `vet_link_text` longtext NOT NULL,
  `vet_emergency` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `walk`
--

CREATE TABLE `walk` (
  `walk_id` int(11) NOT NULL,
  `walk_name` varchar(100) NOT NULL,
  `walk_contact_details` int(11) NOT NULL,
  `walk_address` varchar(200) NOT NULL,
  `walk_image` varchar(200) NOT NULL,
  `walk_description` longtext NOT NULL,
  `walk_link_url` varchar(100) NOT NULL,
  `walk_link_text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groom`
--
ALTER TABLE `groom`
  ADD PRIMARY KEY (`groom_id`);

--
-- Indexes for table `pet_type`
--
ALTER TABLE `pet_type`
  ADD PRIMARY KEY (`pet_type_id`);

--
-- Indexes for table `provider`
--
ALTER TABLE `provider`
  ADD PRIMARY KEY (`provider_id`),
  ADD KEY `provider_type_id` (`provider_type_id`),
  ADD KEY `pet_type_id` (`pet_type_id`);

--
-- Indexes for table `provider_type`
--
ALTER TABLE `provider_type`
  ADD PRIMARY KEY (`provider_type_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `pet_type_id` (`pet_type_id`);

--
-- Indexes for table `user_service_provider`
--
ALTER TABLE `user_service_provider`
  ADD PRIMARY KEY (`usp_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `provider_id` (`provider_id`);

--
-- Indexes for table `vet`
--
ALTER TABLE `vet`
  ADD PRIMARY KEY (`vet_id`);

--
-- Indexes for table `walk`
--
ALTER TABLE `walk`
  ADD PRIMARY KEY (`walk_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groom`
--
ALTER TABLE `groom`
  MODIFY `groom_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pet_type`
--
ALTER TABLE `pet_type`
  MODIFY `pet_type_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `provider`
--
ALTER TABLE `provider`
  MODIFY `provider_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `provider_type`
--
ALTER TABLE `provider_type`
  MODIFY `provider_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_service_provider`
--
ALTER TABLE `user_service_provider`
  MODIFY `usp_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `vet`
--
ALTER TABLE `vet`
  MODIFY `vet_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `walk`
--
ALTER TABLE `walk`
  MODIFY `walk_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `provider`
--
ALTER TABLE `provider`
  ADD CONSTRAINT `provider_ibfk_1` FOREIGN KEY (`provider_type_id`) REFERENCES `provider_type` (`provider_type_id`),
  ADD CONSTRAINT `provider_ibfk_2` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`pet_type_id`) REFERENCES `pet_type` (`pet_type_id`);

--
-- Constraints for table `user_service_provider`
--
ALTER TABLE `user_service_provider`
  ADD CONSTRAINT `user_service_provider_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `user_service_provider_ibfk_3` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`provider_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
