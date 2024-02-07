import { Featured } from "./components/Featured";
import { Landing } from "./components/Landing";
import { Upcoming } from "./components/Upcoming";

export default function Home() {
  return (
    <>
      <Landing />
      <Featured />
      <Upcoming />
    </>
  );
}
