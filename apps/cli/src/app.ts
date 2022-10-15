import { add_demo, get_demo } from "./demo";

const main = async () => {
  await add_demo("test");
  const demos = await get_demo();
  console.log(demos);
};

main();
