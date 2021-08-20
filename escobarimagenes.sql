-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 20-08-2021 a las 03:35:59
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `subirimagenes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE IF NOT EXISTS `imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `image_url` varchar(250) NOT NULL,
  `public_id` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=40 ;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`id`, `titulo`, `descripcion`, `image_url`, `public_id`) VALUES
(27, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629344221/zuhjft6zlvbx1qzil4vv.jpg', 'zuhjft6zlvbx1qzil4vv'),
(28, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421207/emtsmjqzsuiqhbkdesth.jpg', 'emtsmjqzsuiqhbkdesth'),
(29, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421293/tzxslecdm5ci7pnpatmk.jpg', 'tzxslecdm5ci7pnpatmk'),
(30, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421482/umbgegnwdhbjsjqr67ew.jpg', 'umbgegnwdhbjsjqr67ew'),
(31, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421625/vtynw3avsjs1ktz3eztj.jpg', 'vtynw3avsjs1ktz3eztj'),
(32, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421746/rwnhqb2warcmhqjxmr2s.jpg', 'rwnhqb2warcmhqjxmr2s'),
(33, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629421920/o3n9tcfio9lthxemfjmo.jpg', 'o3n9tcfio9lthxemfjmo'),
(34, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629422061/n6t4vgvnaohwwodlyf9h.jpg', 'n6t4vgvnaohwwodlyf9h'),
(35, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629422164/thinzmzuwq6kfmmlxyee.jpg', 'thinzmzuwq6kfmmlxyee'),
(36, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629422487/qdqiwc5ukcf0kdlzols9.jpg', 'qdqiwc5ukcf0kdlzols9'),
(37, '', '', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629422597/jlqrrwatxudxgpbxqgjx.jpg', 'jlqrrwatxudxgpbxqgjx'),
(38, 'moto', 'auto', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629423621/wpx8xfq94krcpgfjkxkr.jpg', 'wpx8xfq94krcpgfjkxkr'),
(39, 'moto', 'sdds', 'http://res.cloudinary.com/dltsj9svl/image/upload/v1629427641/hc5z7uh5pl4752u1x1as.jpg', 'hc5z7uh5pl4752u1x1as');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
