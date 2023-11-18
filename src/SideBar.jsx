import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Card
        className="flex flex-col justify-center align-middle w-60"
        style={{ borderRadius: "0", boxShadow: "inherit" }}
      >
        <div className="flex justify-center w-full">
          <CardHeader floated={false} className="rounded-full w-36">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
        </div>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Ram Mohan
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            rammohan@gmail.com
          </Typography>
        </CardBody>
      </Card>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5">
        {/* <div className="mb-2 p-4">
      <Typography variant="h5" color="blue-gray">
        Sidebar
      </Typography>
    </div> */}
        <div className="flex justify-start w-full" style={{ margin: "-15px" }}>
          <List>
            <ListItem className="bg-cyan-400 pl-9">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className="pl-9 border-2">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Perks
            </ListItem>
            <ListItem className="pl-9 border-2">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Addons
            </ListItem>
            <ListItem className="pl-9 border-2">
              <ListItemPrefix>
                <ChatBubbleLeftIcon className="h-5 w-5" />
              </ListItemPrefix>
              FAQs
            </ListItem>
            <ListItem className="pl-9 border-2">
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              Support
            </ListItem>
          </List>
        </div>

        {/* Log Out button placed outside the List */}
        <ListItem className="bottom-0  mt-auto">
          {" "}
          {/* mt-auto for margin-top:auto to push it to the bottom */}
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </Card>
    </div>
  );
}
