import React from "react";
import TicketCard from "../../components/TicketCard";
import "./dashboard.css";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "done",
      priority: 6,
      progress: 40,
      description:
        "Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q2 2022",
      color: "red",
      title: "Build a bot",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "working on it",
      priority: 2,
      progress: 70,
      description: "Make a video about AI",
      timestamp: "2022-02-13T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      color: "blue",
      title: "Build and Sell Ai Model",
      owner: "Ania Kubow",
      avatar:
        "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "stuck",
      priority: 3,
      progress: 10,
      description: "Make a video about building a bot",
      timestamp: "2022-02-13T07:36:17+0000",
    },
  ];

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 255, 255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log("uniqueCat", uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket__container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 style={{ paddingTop: "20px" }}>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <>
                    <TicketCard
                      id={_index}
                      color={colors[categoryIndex] || colors[0]}
                      ticket={filteredTicket}
                      status={filteredTicket.status}
                      priority={filteredTicket.priority}
                      progress={filteredTicket.progress}
                    />
                  </>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
