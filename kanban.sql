-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2020 at 04:33 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kanban`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `added` datetime NOT NULL,
  `color_hash` varchar(7) COLLATE utf8_bin NOT NULL,
  `progress` tinyint(4) NOT NULL,
  `content` text COLLATE utf8_bin NOT NULL,
  `moved` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `added`, `color_hash`, `progress`, `content`, `moved`) VALUES
(24, '2020-03-25 16:14:52', '#289ad7', 2, 'Siedzieć w domu', '2020-03-25 16:15:38'),
(25, '2020-03-25 16:15:06', '#dc474b', 1, 'Siedzieć w domu ale na czerwono', '2020-03-25 16:15:40'),
(26, '2020-03-25 16:15:31', '#eaee35', 0, 'Dalej siedzieć w domu i to na ż&oacute;łto', '2020-03-25 16:15:31'),
(27, '2020-03-25 16:15:59', '#4ee73d', 0, 'Nauka do matury bla bla', '2020-03-25 16:16:46'),
(28, '2020-03-25 16:16:17', '#da8e49', 1, 'Pograć w gierki dla dzieci', '2020-03-25 16:16:18'),
(29, '2020-03-25 16:16:36', '#bb66bd', 1, 'Napić się piwka max czterech', '2020-03-25 16:16:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
