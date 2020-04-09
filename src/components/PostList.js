import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    newComment: {},
    posts: [
      {
        id: 1,
        author: {
          name: "Gerson Afonso Padilha",
          avatar: "https://i.pravatar.cc/500?img=18",
        },
        date: "07 Abr 2020",
        content: "Sulista é tudo vi@do!",
        comments: [
          {
            id: 1,
            author: {
              name: "João Colussi",
              avatar: "https://i.pravatar.cc/500?img=55",
            },
            content: "Bah tchê, concordo co cê, isso explica tudo sobre mim",
          },
          {
            id: 2,
            author: {
              name: "Gabriel Máximo",
              avatar: "https://i.pravatar.cc/500?img=12",
            },
            content:
              "spaodkapsokdpoaskdpoaskpdoaskpodkaspodkasopdkaspokdpasokdpoaskpdoaskpdokaspodkaspodkapsdkaspokdpasokdpaoskdpoaskdpoaskpdoaskdpoaskdpoaskpdoakspodakspdokaspodkaspodkaspokdsop",
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "Heloisa Yumi",
          avatar: "https://i.pravatar.cc/500?img=19",
        },
        date: "07 Abr 2020",
        content: "Eu amo meu namorado! <3",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel Máximo",
              avatar: "https://i.pravatar.cc/500?img=12",
            },
            content: "Eu sei <3",
          },
        ],
      },
      {
        id: 3,
        author: {
          name: "João Colussi",
          avatar: "https://i.pravatar.cc/500?img=55",
        },
        date: "07 Abr 2020",
        content: "Bah tchê, porque que eu acordo todo dia com a bunda doendo?",
        comments: [
          {
            id: 1,
            author: {
              name: "Gerson Afonso Padilha",
              avatar: "https://i.pravatar.cc/500?img=18",
            },
            content: "É porque tu é sulista mano, normal",
          },
          {
            id: 2,
            author: {
              name: "Gabriel Máximo",
              avatar: "https://i.pravatar.cc/500?img=12",
            },
            content:
              "spaodkapsokdpoaskdpoaskpdoaskpodkaspodkasopdkaspokdpasokdpoaskpdoaskpdokaspodkaspodkapsdkaspokdpasokdpaoskdpoaskdpoaskpdoaskdpoaskdpoaskpdoakspodakspdokaspodkaspodkaspokdsop",
          },
        ],
      },
      {
        id: 4,
        author: {
          name: "Gabriel Maximo",
          avatar: "https://i.pravatar.cc/500?img=12",
        },
        date: "07 Abr 2020",
        content:
          "Cara é dificil a vida, alguém sabe a onde que tem vida fácil aqui no Brasil?",
        comments: [
          {
            id: 1,
            author: {
              name: "João Colussi",
              avatar: "https://i.pravatar.cc/500?img=55",
            },
            content:
              "Bah tchê, vem pro sul, aqui é vida facil, o problema é só com assadura, mas tu acostuma",
          },
          {
            id: 2,
            author: {
              name: "Gabriel Máximo",
              avatar: "https://i.pravatar.cc/500?img=12",
            },
            content:
              "spaodkapsokdpoaskdpoaskpdoaskpodkaspodkasopdkaspokdpasokdpoaskpdoaskpdokaspodkaspodkapsdkaspokdpasokdpaoskdpoaskdpoaskpdoaskdpoaskdpoaskpdoakspodakspdokaspodkaspodkaspokdsop",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
