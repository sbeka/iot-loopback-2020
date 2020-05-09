-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 09, 2020 at 04:22 PM
-- Server version: 5.6.41
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `internet-things`
--

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

CREATE TABLE `camera` (
  `id` int(11) NOT NULL,
  `name` varchar(512) DEFAULT NULL,
  `photo` varchar(512) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `camera`
--

INSERT INTO `camera` (`id`, `name`, `photo`, `date`, `userId`) VALUES
(1, 'Прихожая', './assets/images/camera1.png', '2020-05-09 06:36:27', 1),
(2, 'Кухня', './assets/images/camera2.png', '2020-05-09 06:36:27', 1);

-- --------------------------------------------------------

--
-- Table structure for table `centernotification`
--

CREATE TABLE `centernotification` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `text` varchar(512) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `district` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `centernotification`
--

INSERT INTO `centernotification` (`id`, `userId`, `text`, `date`, `district`) VALUES
(1, 1, 'fire', '2020-05-09 10:38:52', 1),
(2, 1, 'gas', '2020-05-09 10:38:52', 1),
(3, 1, 'gas', '2020-05-09 10:50:24', 1),
(4, 1, 'gas', '2020-05-09 10:50:48', 2),
(5, 1, 'fire', '2020-05-09 11:08:04', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sensor`
--

CREATE TABLE `sensor` (
  `id` int(11) NOT NULL,
  `name` varchar(512) DEFAULT NULL,
  `imei` varchar(512) DEFAULT NULL,
  `icon` varchar(512) DEFAULT NULL,
  `data` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `type` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sensor`
--

INSERT INTO `sensor` (`id`, `name`, `imei`, `icon`, `data`, `userId`, `type`) VALUES
(1, 'Датчик температуры', '6548453152', './assets/icon/temp.png', 25, 1, '°C'),
(2, 'Датчик дыма', '7898645312', './assets/icon/fire.png', 17, 1, ''),
(3, 'Датчик движения', '4345378345', './assets/icon/move.png', 37, 1, 'дБ');

-- --------------------------------------------------------

--
-- Table structure for table `skud`
--

CREATE TABLE `skud` (
  `id` int(11) NOT NULL,
  `name` varchar(512) DEFAULT NULL,
  `photo` varchar(512) DEFAULT NULL,
  `isOpen` tinyint(1) DEFAULT NULL,
  `microdistrict` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `skud`
--

INSERT INTO `skud` (`id`, `name`, `photo`, `isOpen`, `microdistrict`) VALUES
(1, 'СКУД 1', './assets/images/skud1.png', 0, 10),
(2, 'СКУД 2', './assets/images/skud2.png', 1, 10);

-- --------------------------------------------------------

--
-- Table structure for table `telemetry`
--

CREATE TABLE `telemetry` (
  `id` int(11) NOT NULL,
  `name` varchar(512) DEFAULT NULL,
  `data` int(11) DEFAULT NULL,
  `history` text,
  `userId` int(11) DEFAULT NULL,
  `type` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `telemetry`
--

INSERT INTO `telemetry` (`id`, `name`, `data`, `history`, `userId`, `type`) VALUES
(1, 'Горячая вода', 55, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 1, ' куб.м.'),
(2, 'Холодная вода', 46, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 1, ' куб.м.'),
(3, 'Электричество', 75, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 1, 'квт.ч.'),
(4, 'Отопление', 25, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 1, 'куб.м.'),
(5, 'Горячая вода', 55, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 2, ' куб.м.'),
(6, 'Холодная вода', 46, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 2, ' куб.м.'),
(7, 'Электричество', 75, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 2, 'квт.ч.'),
(8, 'Отопление', 25, '[{\"Май\":52.71},{\"Апрель\":47.39},{\"Март\":49.83},{\"Февраль\":45.2},{\"Январь\":50.46}]', 2, 'куб.м.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `fullname` varchar(512) DEFAULT NULL,
  `address` varchar(512) DEFAULT NULL,
  `status` varchar(512) DEFAULT NULL,
  `knocked` int(11) DEFAULT NULL,
  `microdistrict` int(11) DEFAULT NULL,
  `coors` text,
  `district` int(11) DEFAULT NULL,
  `home` int(11) DEFAULT NULL,
  `apartment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `fullname`, `address`, `status`, `knocked`, `microdistrict`, `coors`, `district`, `home`, `apartment`) VALUES
(1, 'internet', '123456', 'Иванов Иван Иванович', 'г. Алматы, мкр. Жастар, д. 44, кв 10', 'Все в порядке', 3, 1, '[43.253128, 76.931402]', 1, 24, 12),
(2, 'cheburek', '123456', 'Александров Александр Александрович', 'г. Алматы, мкр. Молодежный, д. 12, кв 25', 'Все в порядке', 2, 2, '[43.237998, 76.954061]', 1, 24, 13);

-- --------------------------------------------------------

--
-- Table structure for table `usernotification`
--

CREATE TABLE `usernotification` (
  `id` int(11) NOT NULL,
  `text` varchar(512) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usernotification`
--

INSERT INTO `usernotification` (`id`, `text`, `date`, `userId`) VALUES
(1, 'У вас в доме пожар', '2020-05-09 10:22:22', 1),
(2, 'У вас в доме утечка газа', '2020-05-09 12:22:22', 1),
(3, 'У вас в доме замыкание электричество', '2020-05-09 10:34:22', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `camera`
--
ALTER TABLE `camera`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `centernotification`
--
ALTER TABLE `centernotification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sensor`
--
ALTER TABLE `sensor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skud`
--
ALTER TABLE `skud`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `telemetry`
--
ALTER TABLE `telemetry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usernotification`
--
ALTER TABLE `usernotification`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `camera`
--
ALTER TABLE `camera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `centernotification`
--
ALTER TABLE `centernotification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sensor`
--
ALTER TABLE `sensor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skud`
--
ALTER TABLE `skud`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `telemetry`
--
ALTER TABLE `telemetry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usernotification`
--
ALTER TABLE `usernotification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
