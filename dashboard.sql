-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: mysqldb:3306
-- Generation Time: 2018-02-07 05:57:06
-- 服务器版本： 5.7.12
-- PHP Version: 7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imanager`
--

-- --------------------------------------------------------

--
-- 表的结构 `dashboard`
--

CREATE TABLE `dashboard` (
  `id` int(16) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `dashboard`
--

INSERT INTO `dashboard` (`id`, `title`, `data`) VALUES
(1, 'Dashboard1', '{\"panels\":[{\"mode\":\"line\",\"stack\":\"总量\",\"xAxis\":{\"type\":\"category\"},\"legend\":{\"show\":false},\"id\":1,\"title\":\"测试\",\"targets\":[{\"expr\":\"\"}],\"gridPos\":{\"x\":0,\"y\":3,\"w\":11,\"h\":3}},{\"mode\":\"chart\",\"stack\":\"sum\",\"legend\":{\"show\":true},\"id\":2,\"title\":\"测试2\",\"targets\":[{\"expr\":\"\"}],\"gridPos\":{\"x\":3,\"y\":0,\"w\":1,\"h\":3}}]}'),
(2, 'Dashboard1', '{\"panels\":[{\"mode\":\"line\",\"stack\":\"总量\",\"xAxis\":{\"type\":\"category\"},\"legend\":{\"show\":false},\"id\":1,\"title\":\"测试\",\"targets\":[{\"expr\":\"\"}],\"gridPos\":{\"x\":0,\"y\":0,\"w\":9,\"h\":3}},{\"mode\":\"chart\",\"stack\":\"sum\",\"legend\":{\"show\":true},\"id\":2,\"title\":\"测试2\",\"targets\":[{\"expr\":\"\"}],\"gridPos\":{\"x\":0,\"y\":3,\"w\":9,\"h\":3}}]}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dashboard`
--
ALTER TABLE `dashboard`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `dashboard`
--
ALTER TABLE `dashboard`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
