import { useState } from "react";
import Feed from "./components/Feed";
import Notification from "./components/Notification";
import Profile from "./components/Profile";

const App = () => {
  const [screen, setScreen] = useState<"feed" | "notifications" | "profile">(
    "feed",
  );
  return (
    <div>
      <div>
        <button onClick={() => setScreen("feed")}>Feed</button>
        <button onClick={() => setScreen("notifications")}>
          Notifications
        </button>
        <button onClick={() => setScreen("profile")}>Profile</button>
      </div>

      {screen === "feed" && <Feed />}
      {screen === "notifications" && <Notification />}
      {screen === "profile" && <Profile />}
    </div>
  );
};

export default App;
