import {
  ArrowRightIcon,
  CloudIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tab,
  Tabs,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

function Home() {
  const data = [
    {
      label: "Annually",
      value: "html",
    },
    {
      label: "Monthly",
      value: "monthly",
    },
  ];
  return (
    <div className="w-full h-screen" style={{ backgroundColor: "#bbeefa" }}>
      <Card
        style={{ borderRadius: "0", width: "90%", height: "100%" }}
        className="pb-5"
      >
        <CardBody className="p-5">
          <Typography variant="h4" color="blue-gray" className="mb-2 ml-5">
            Choose a plan that just right for you !
          </Typography>
          <div className="flex justify-end pr-5">
            <Tabs
              id="custom-animation"
              value="html"
              style={{ borderRadius: "30px" }}
            >
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <div key={value} style={{ borderRadius: "60px" }}>
                    <Tab value={value}>{label}</Tab>
                  </div>
                ))}
              </TabsHeader>
            </Tabs>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex flex-col px-10">
          <div className="sm:flex justify-between">
            <Card className="w-full max-w-[18rem] p-6 my-2">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-4 rounded-none border-b pb-3 text-start"
              >
                <Typography className="font-normal text-2xl">Basic</Typography>
                <Typography className="flex gap-1 font-normal text-sm">
                  <span className="mt-1 line-through">$89.99/mo</span>
                </Typography>
                <Typography className="flex font-normal text-xl" variant="h3">
                  <span className="mt-1">$9.99</span>
                  <span className="self-end">/mo</span>
                </Typography>
                <Button
                  size="sm"
                  color="yellow"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-36 text-start pl-3 mt-4 flex flex-row items-center"
                  ripple={false}
                  fullWidth={true}
                >
                  <p className="pr-3">Get Started</p>
                  <ArrowRightIcon width={15} />
                </Button>
              </CardHeader>
              <CardBody className="p-0">
                <Typography className="font-normal text-sm">
                  What you will get
                </Typography>
                <ul className="flex flex-col gap-4 my-3">
                  <li className="flex items-center gap-1">
                    <UserIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 25 users
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <CloudIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 25gb storage
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <InboxIcon className="w-4" />
                    <Typography className="font-normal">
                      Email Support
                    </Typography>
                  </li>
                </ul>
                <Typography className="font-normal text-black underline text-sm">
                  EXPLORE FEATURES
                </Typography>
              </CardBody>
            </Card>
            <Card className="w-full max-w-[18rem] p-6 my-2">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-4 rounded-none border-b pb-3 text-start"
              >
                <Typography className="font-normal text-2xl">Basic</Typography>
                <Typography className="flex gap-1 font-normal text-sm">
                  <span className="mt-1 line-through">$189.99/mo</span>
                </Typography>
                <Typography className="flex font-normal text-xl" variant="h3">
                  <span className="mt-1">$99.99</span>
                  <span className="self-end">/mo</span>
                </Typography>
                <Button
                  size="sm"
                  color="red"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-36 text-start pl-3 mt-4 flex flex-row items-center"
                  ripple={false}
                  fullWidth={true}
                >
                  <p className="pr-3">Get Started</p>
                  <ArrowRightIcon width={15} />
                </Button>
              </CardHeader>
              <CardBody className="p-0">
                <Typography className="font-normal text-sm">
                  What you will get
                </Typography>
                <ul className="flex flex-col gap-4 my-3">
                  <li className="flex items-center gap-1">
                    <UserIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 50 users
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <CloudIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 60gb storage
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <InboxIcon className="w-4" />
                    <Typography className="font-normal">
                      Email Support
                    </Typography>
                  </li>
                </ul>
                <Typography className="font-normal text-black underline text-sm">
                  EXPLORE FEATURES
                </Typography>
              </CardBody>
            </Card>
            <Card className="w-full max-w-[18rem] p-6 my-2">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-4 rounded-none border-b pb-3 text-start"
              >
                <Typography className="font-normal text-2xl">
                  Standard
                </Typography>
                <Typography className="flex gap-1 font-normal text-sm">
                  <span className="mt-1 line-through">$389.99/mo</span>
                </Typography>
                <Typography className="flex font-normal text-xl" variant="h3">
                  <span className="mt-1">$199.99</span>
                  <span className="self-end">/mo</span>
                </Typography>
                <Button
                  size="sm"
                  color="purple"
                  className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-36 text-start pl-3 mt-4 flex flex-row items-center"
                  ripple={false}
                  fullWidth={true}
                >
                  <p className="pr-3">Get Started</p>
                  <ArrowRightIcon width={15} />
                </Button>
              </CardHeader>
              <CardBody className="p-0">
                <Typography className="font-normal text-sm">
                  What you will get
                </Typography>
                <ul className="flex flex-col gap-4 my-3">
                  <li className="flex items-center gap-1">
                    <UserIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 50 users
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <CloudIcon className="w-4" />
                    <Typography className="font-normal">
                      Upto 60gb storage
                    </Typography>
                  </li>
                  <li className="flex items-center gap-1">
                    <InboxIcon className="w-4" />
                    <Typography className="font-normal">
                      Email Support
                    </Typography>
                  </li>
                </ul>
                <Typography className="font-normal text-black underline text-sm">
                  EXPLORE FEATURES
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="sm:flex">
            <Card className="mt-6 w-auto mr-5 my-2">
              <CardBody className="flex flex-row">
                <div className="mr-5">
                  <Chip value="Free Forever" color="green" className="w-28" />
                  <Typography className="py-1" variant="h3">
                    Free starter
                  </Typography>
                  <p size="sm">
                    The quickest and easiest way to try protocols with
                    fuctionalities
                  </p>
                  <Button
                    size="sm"
                    color="green"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-36 text-start pl-3 mt-4 flex flex-row items-center"
                    ripple={false}
                    fullWidth={true}
                  >
                    <p className="pr-3">Get Started</p>
                    <ArrowRightIcon width={15} />
                  </Button>
                </div>
                <div>
                  <Typography className="font-normal text-sm">
                    What you will get
                  </Typography>
                  <ul className="flex flex-col gap-4 my-3">
                    <li className="flex items-center gap-1">
                      <UserIcon className="w-4" />
                      <Typography className="font-normal">
                        Upto 25 users
                      </Typography>
                    </li>
                    <li className="flex items-center gap-1">
                      <CloudIcon className="w-4" />
                      <Typography className="font-normal">
                        Upto 25gb storage
                      </Typography>
                    </li>
                    <li className="flex items-center gap-1">
                      <InboxIcon className="w-4" />
                      <Typography className="font-normal">
                        Email Support
                      </Typography>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
            <Card className="mt-6 w-auto my-2">
              <CardBody className="flex flex-row">
                <div className="mr-5">
                  <Chip value="Free Forever" className="w-28" />
                  <Typography className="py-1" variant="h3">
                    Free starter
                  </Typography>
                  <p size="sm">
                    The quickest and easiest way to try protocols with
                    fuctionalities
                  </p>
                  <Button
                    size="sm"
                    color="yellow"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 w-36 text-start pl-3 mt-4 flex flex-row items-center"
                    ripple={false}
                    fullWidth={true}
                  >
                    <p className="pr-3">Get Started</p>
                    <ArrowRightIcon width={15} />
                  </Button>
                </div>
                <div>
                  <Typography className="font-normal text-sm">
                    What you will get
                  </Typography>
                  <ul className="flex flex-col gap-4 my-3">
                    <li className="flex items-center gap-1">
                      <UserIcon className="w-4" />
                      <Typography className="font-normal">
                        Upto 25 users
                      </Typography>
                    </li>
                    <li className="flex items-center gap-1">
                      <CloudIcon className="w-4" />
                      <Typography className="font-normal">
                        Upto 25gb storage
                      </Typography>
                    </li>
                    <li className="flex items-center gap-1">
                      <InboxIcon className="w-4" />
                      <Typography className="font-normal">
                        Email Support
                      </Typography>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
