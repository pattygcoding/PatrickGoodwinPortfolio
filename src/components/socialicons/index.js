import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.linkedin && (
                  <li>
                    <a href={socialprofils.linkedin}>
                      <FaLinkedin />
                    </a>
                  </li>
                )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
           <li>
             <a href={socialprofils.instagram}>
               <FaInstagram />
             </a>
           </li>
          )}
        {socialprofils.tiktok && (
          <li>
            <a href={socialprofils.tiktok}>
              <FaTiktok />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
