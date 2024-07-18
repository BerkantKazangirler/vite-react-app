import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  const [error, setError] = useState(undefined);

  async function onSubmit() {
    if (userInfo && search === userInfo.login) {
      alert("aynı userk kardeş");
      return;
    }
    console.log(search);
    setLoading(true);
    const response = await fetch("https://api.github.com/users/" + search).then(
      (res) => res.json()
    );
    setLoading(false);
    if (response.status === "404") {
      setError(response.message);
      return;
    }
    setError(undefined);
    setUserInfo(response);
    console.log(response);
    console.log(userInfo);
  }

  return (
    <div className="w-screen h-screen bg-slate-100 transition-colors duration-500 ease-out p-5 md:p-0 dark:bg-slate-800">
      <div className="flex items-center flex-col w-auto m-auto container h-auto max-w-256">
        <div className="flex flex-row justify-between pt-16 pb-8 w-full">
          <h1 className="font-semibold font-mono text-xl text-sky-900 dark:text-white">
            devfinder
          </h1>
          <button
            className="flex justify-center h-fit"
            onClick={() => toggleTheme()}
          >
            <p className="text-sky-700 font-light text-sm dark:text-white">
              DARK
            </p>
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-moon.svg"
              className="ml-2 h-4 w-4 relative top-0.5"
            ></img>
          </button>
        </div>
        <div className="bg-zinc-50 flex flex-row justify-around ps-5 pe-2 w-full rounded-2xl dark:bg-slate-700 dark:text-white">
          <form
            onSubmit={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onSubmit();
            }}
            className="w-full flex flex-row justify-between p-1"
          >
            <img
              src="https://kunalshakya.github.io/GitHub-User-Search-App/assets/icon-search.svg"
              className="w-7 h-fit relative top-3"
            ></img>
            <input
              type="text"
              placeholder="Search GitHub Username..."
              className="bg-transparent border-none focus-visible:outline-none w-full ml-5 font-mono text-opacity-55"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button
              className="font-mono bg-blue-400 p-3 rounded-xl text-white font-semibold disabled:bg-gray-500"
              disabled={loading}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        {userInfo !== undefined && (
          <div className="bg-zinc-50 flex flex-row gap-5 w-full rounded-2xl mt-7 pb-5 dark:bg-slate-700 dark:text-white">
            <div className="flex p-5">
              <img
                src={userInfo.avatar_url}
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
                  {userInfo.name}
                </span>
                <span
                  className="text-black/50 font-mono dark:text-white w-fit"
                  id="joindate"
                >
                  Joined{" "}
                  {new Date(userInfo.created_at).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex w-fit">
                <a
                  href={userInfo.html_url}
                  target="_blank"
                  className="font-mono text-blue-500 w-fit"
                  id="url"
                >
                  {userInfo.login}
                </a>
              </div>
              <div className="flex w-fit mt-7">
                <span
                  className="font-mono text-black/50 dark:text-white"
                  id="bio"
                >
                  {userInfo.bio ? userInfo.bio : "-"}
                </span>
              </div>
              <div className="bg-gray-400/30 rounded-2xl p-4 mt-5 w-full container dark:bg-slate-900">
                <div className="flex flex-row gap-5 sm:gap-32">
                  <div className="flex flex-col ml-2 sm:ml-8">
                    <p className="font-mono">Repos</p>
                    <span className="font-bold" id="reponum">
                      {userInfo.public_repos}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono">Followers</p>
                    <span className="font-bold" id="followers">
                      {userInfo.followers}
                    </span>
                  </div>
                  <div>
                    <p className="font-mono">Following</p>
                    <span className="font-bold" id="following">
                      {userInfo.following}
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
                    {userInfo.location ? userInfo.location : "Not available"}
                  </span>
                </div>
                <a
                  href={
                    userInfo.twitter_username
                      ? "www.x.com/" + userInfo.twitter_username
                      : "#"
                  }
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
                    {userInfo.twitter_username
                      ? userInfo.twitter_username
                      : "Not available"}
                  </span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row mt-6 gap-3 sm:gap-0 w-fit sm:w-full justify-between">
                <a
                  href={userInfo.blog ? "www." + userInfo.blog : "#"}
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
                    {userInfo.blog ? userInfo.blog : "Not available"}
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
                    {userInfo.company ? userInfo.company : "Not available"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {loading && <div>Loading....</div>}
        {error && <div>{error} </div>}
      </div>
    </div>
  );
}

export default App;
