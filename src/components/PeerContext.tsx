import React, { createContext, useEffect, useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";
// utils
import Peer from "peerjs";
import { nanoid } from "nanoid";
import localForage from "localforage";

interface ContextProps {
  peer: Peer;
}

export const PeerContext = createContext<Partial<ContextProps>>({});

export function PeerContextProvider({ children }: { children: any }) {
  const [peer, setPeer] = useState<Peer>();
  const history = useHistory();

  useEffect(() => {
    const peer = new Peer(nanoid(5), {
      host: "ciapeer.herokuapp.com",
      secure: true,
    });

    peer.on("open", (id) => {
      setPeer(peer);
      console.log(id);
      localForage.setItem("peerid", id);
    });

    peer.on("error", (err) => {
      if (err.type === "unavailable-id") {
        window.location.reload();
      }
    });
  }, []);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      console.log(location);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <PeerContext.Provider value={{ peer }}>{children}</PeerContext.Provider>
  );
}
