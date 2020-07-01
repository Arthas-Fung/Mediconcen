-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-07-01 17:16:10
-- 伺服器版本： 10.4.10-MariaDB
-- PHP 版本： 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mediconcen`
--

-- --------------------------------------------------------

--
-- 資料表結構 `consultation_records`
--

CREATE TABLE `consultation_records` (
  `record_id` int(11) NOT NULL,
  `doctor_name` varchar(20) NOT NULL,
  `patient_name` varchar(20) NOT NULL,
  `diagnosis` varchar(30) NOT NULL,
  `medication` varchar(30) NOT NULL,
  `consultation_fee` varchar(5) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `follow_up_consultation` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `consultation_records`
--

INSERT INTO `consultation_records` (`record_id`, `doctor_name`, `patient_name`, `diagnosis`, `medication`, `consultation_fee`, `date_time`, `follow_up_consultation`) VALUES
(1, 'Tom', 'John', 'A', 'B', '100', '2020-06-30 13:27:49', 'N/A'),
(2, 'Mary', 'Tim', 'C', 'D', '120', '2020-06-30 13:27:56', 'Tomorrow'),
(3, 'QQ', 'Jack', '', '', '', '2020-07-21 16:00:00', ''),
(4, 'QQ', 'Jack', '', '', '', '2020-07-20 16:00:00', ''),
(5, 'QQ', 'Jack', '', '', '', '2020-07-03 16:00:00', ''),
(6, 'QQ', 'Jack', '', '', '', '2020-08-03 16:00:00', ''),
(7, 'QQ', 'Jack', '', '', '', '2020-07-05 16:00:00', ''),
(8, 'QQ', 'Jack', '', '', '', '2020-06-11 13:27:49', ''),
(9, 'QQ', 'Jack', '', '', '', '2020-06-11 13:27:49', '');

-- --------------------------------------------------------

--
-- 資料表結構 `user_profile`
--

CREATE TABLE `user_profile` (
  `user_id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `clinic_name` varchar(20) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user_profile`
--

INSERT INTO `user_profile` (`user_id`, `email`, `password`, `clinic_name`, `phone_number`, `address`) VALUES
(1, 'sh.fung.217@gmail.com', 'password', 'ABC Clinic', '61228989', 'Tuen Mun'),
(2, '111', '222', 'HK Clinic', '66666666', 'Hong Kong'),
(3, '222', '444', 'QQ Clinic', '33333333', 'Hong Kong'),
(4, '333', '444', 'QQ Clinic', '33333333', 'Hong Kong'),
(5, '444', '444', 'QQ Clinic', '33333333', 'Hong Kong'),
(6, '555', '444', 'QQ Clinic', '33333333', 'Hong Kong'),
(7, '3333', '444', 'QQ Clinic', '33333333', 'Hong Kong');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `consultation_records`
--
ALTER TABLE `consultation_records`
  ADD PRIMARY KEY (`record_id`);

--
-- 資料表索引 `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `consultation_records`
--
ALTER TABLE `consultation_records`
  MODIFY `record_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
