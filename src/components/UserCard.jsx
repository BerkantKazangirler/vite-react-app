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
          className="sm:min-w-20 sm:max-w-24 h-fit min-w-18 max-w-20 rounded-full"
        />
      </div>
      <div className="flex container flex-col pe-5">
        <div className="flex flex-col sm:flex-row justify-around mt-5 sm:justify-between sm:w-full w-full">
          <span className="text-black font-mono font-bold text-2xl dark:text-white w-fit">
            {name}
          </span>
          <span className="text-black/50 font-mono dark:text-white w-fit">
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
          >
            {login}
          </a>
        </div>
        <div className="flex w-fit mt-7">
          <span className="font-mono text-black/50 dark:text-white">
            {bio ? bio : "-"}
          </span>
        </div>
        <div className="bg-gray-400/30 rounded-2xl p-4 mt-5 md:w-max relative -left-32 md:-left-0 container dark:bg-slate-900">
          <div className="flex flex-row gap-5 sm:gap-32">
            <div className="flex flex-col ml-2 sm:ml-8">
              <p className="font-mono">Repos</p>
              <span className="font-bold">{public_repos}</span>
            </div>
            <div>
              <p className="font-mono">Followers</p>
              <span className="font-bold">{followers}</span>
            </div>
            <div>
              <p className="font-mono">Following</p>
              <span className="font-bold">{following}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 mt-6 w-fit relative -left-32 md:-left-0 sm:w-full justify-between">
          <div className="flex flex-row w-fit">
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-location.svg"
              className="w-4 h-fit"
            />
            <span className="font-mono text-blue-900/80 ml-3 dark:text-white">
              {location ? location : "Not available"}
            </span>
          </div>
          <a
            href={twitter_username ? "www.x.com/" + twitter_username : ""}
            className="flex flex-row w-fit"
            target="_blank"
          >
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-twitter.svg"
              className="w-7 h-fit"
            />
            <span className="font-mono text-blue-900/80 ml-3 dark:text-white">
              {twitter_username ? twitter_username : "Not available"}
            </span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row mt-6 gap-3 sm:gap-0 w-fit relative -left-32 md:-left-0 sm:w-full justify-between">
          <a
            href={blog ? "www." + blog : ""}
            className="flex w-fit flex-row"
            target="_blank"
          >
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-website.svg"
              className="w-4 h-4"
            />
            <span className="font-mono text-blue-900/80 ml-3 w-24 dark:text-white">
              {blog ? blog : "Not available"}
            </span>
          </a>
          <div className="flex flex-row w-fit">
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-company.svg"
              className="w-6 h-fit"
            />
            <span className="font-mono text-blue-900/80 ml-3 dark:text-white">
              {company ? company : "Not available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
