import { useState } from "react";
import UserCard from "./components/UserCard";

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
          <a href="/users"></a>
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
          <UserCard
            avatar_url={userInfo.avatar_url}
            name={userInfo.name}
            created_at={userInfo.created_at}
            html_url={userInfo.html_url}
            login={"@" + userInfo.login}
            bio={userInfo.bio}
            public_repos={userInfo.public_repos}
            followers={userInfo.followers}
            following={userInfo.following}
            location={userInfo.location}
            twitter_username={userInfo.twitter_username}
            company={userInfo.company}
            blog={userInfo.blog}
          />
        )}
        {loading && <div>Loading....</div>}
        {error && <div>{error} </div>}
      </div>
    </div>
  );
}

export default App;
