import React from "react";
import "./SocialIcons.css";
import {
	FaGithub,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
	FaTiktok,
} from "react-icons/fa";
import t from '@/config/text.json';

const SocialIcons = (params) => {
	return (
		<div className="stick_follow_icon">
			<ul>
				{t.links.linkedin && (
					<li>
						<a href={t.links.linkedin}>
							<FaLinkedin />
						</a>
					</li>
				)}
				{t.links.github && (
					<li>
						<a href={t.links.github}>
							<FaGithub />
						</a>
					</li>
				)}
				{t.links.youtube && (
					<li>
						<a href={t.links.youtube}>
							<FaYoutube />
						</a>
					</li>
				)}
				{t.links.instagram && (
					<li>
						<a href={t.links.instagram}>
							<FaInstagram />
						</a>
					</li>
				)}
				{t.links.tiktok && (
					<li>
						<a href={t.links.tiktok}>
							<FaTiktok />
						</a>
					</li>
				)}
			</ul>
			<p>Follow Me</p>
		</div>
	);
};

export default SocialIcons;