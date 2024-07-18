import React from "react";

const UserCard = ({
  avatar_url,
  name,
  created_at,
  html_url,
  login,
  bio,
  public_repos,
  followers,
  following,
  location,
  twitter_username,
  company,
  blog,
}) => {
  return (
    <div className="bg-zinc-50 flex flex-row gap-5 w-full rounded-2xl mt-7 pb-5 dark:bg-slate-700 dark:text-white">
      <div className="flex p-5">
        <img
          src={avatar_url}
          id="img"
          className="sm:min-w-20 sm:max-w-24 h-fit min-w-18 max-w-20 rounded-full"
        ></img>
      </div>
      <div className="flex flex-col w-fit pe-5 sm:w-full">
        <div className="flex flex-col sm:flex-row justify-around mt-5 sm:justify-between sm:w-full w-fit">
          <span
            className="text-black font-mono font-bold text-2xl dark:text-white w-fit"
            id="name"
          >
            {name}
          </span>
          <span
            className="text-black/50 font-mono dark:text-white w-fit"
            id="joindate"
          >
            Joined{" "}
            {new Date(created_at).toLocaleString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex w-fit">
          <a
            href={html_url}
            target="_blank"
            className="font-mono text-blue-500 w-fit"
            id="url"
          >
            {login}
          </a>
        </div>
        <div className="flex w-fit mt-7">
          <span className="font-mono text-black/50 dark:text-white" id="bio">
            {bio ? bio : "-"}
          </span>
        </div>
        <div className="bg-gray-400/30 rounded-2xl p-4 mt-5 w-full container dark:bg-slate-900">
          <div className="flex flex-row gap-5 sm:gap-32">
            <div className="flex flex-col ml-2 sm:ml-8">
              <p className="font-mono">Repos</p>
              <span className="font-bold" id="reponum">
                {public_repos}
              </span>
            </div>
            <div>
              <p className="font-mono">Followers</p>
              <span className="font-bold" id="followers">
                {followers}
              </span>
            </div>
            <div>
              <p className="font-mono">Following</p>
              <span className="font-bold" id="following">
                {following}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 mt-6 w-fit sm:w-full justify-between">
          <div className="flex flex-row w-fit">
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-location.svg"
              className="w-4 h-fit"
            ></img>
            <span
              className="font-mono text-blue-900/80 ml-3 dark:text-white"
              id="city"
            >
              {location ? location : "Not available"}
            </span>
          </div>
          <a
            href={twitter_username ? "www.x.com/" + twitter_username : "#"}
            className="flex flex-row w-fit"
            target="_blank"
          >
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-twitter.svg"
              className="w-7 h-fit"
            ></img>
            <span
              className="font-mono text-blue-900/80 ml-3 dark:text-white"
              id="twitter"
            >
              {twitter_username ? twitter_username : "Not available"}
            </span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row mt-6 gap-3 sm:gap-0 w-fit sm:w-full justify-between">
          <a
            href={blog ? "www." + blog : ""}
            className="flex w-fit flex-row"
            target="_blank"
          >
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-website.svg"
              className="w-4 h-4"
            ></img>
            <span
              className="font-mono text-blue-900/80 ml-3 w-24 dark:text-white"
              id="blogsite"
            >
              {blog ? blog : "Not available"}
            </span>
          </a>
          <div className="flex flex-row w-fit">
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-company.svg"
              className="w-6 h-fit"
            ></img>
            <span
              className="font-mono text-blue-900/80 ml-3 dark:text-white"
              id="duty"
            >
              {company ? company : "Not available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
