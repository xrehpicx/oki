import * as React from "react";

import { useContext, useEffect, useState } from "react";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  Redirect,
} from "react-router-dom";

import {
  Button,
  Collapse,
  Fab,
  IconButton,
  InputBase,
  Tooltip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import { useSpring, animated } from "react-spring";
import { PeerContext } from "../PeerContext";

import "../css/home.css";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className=".home">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/session:id">
          <Session />
        </Route>
      </Switch>
    </div>
  );
};

function Session() {
  return <div className="session">test</div>;
}

function Landing() {
  const { peer } = useContext(PeerContext);
  const [sty, set] = useSpring(() => ({
    transform: "scale(1)",
    opacity: 1,
  }));
  const history = useHistory();
  useEffect(() => {
    if (peer && peer.id && history) {
      set({ transform: "scale(0.5)", opacity: 0, delay: 1500 }).then(() => {
        history.push("/profile");
      });
    }
  }, [set, peer, history]);

  return (
    <>
      {/* @ts-ignore */}
      <animated.div className="landing" style={sty}>
        <Logo />
        <p>Anonymous communication</p>
      </animated.div>
    </>
  );
}

function CopiedToClipboard({
  set,
  open,
}: {
  set: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        set(false);
      }, 2000);
    }
    // eslint-disable-next-line
  }, [open]);

  return (
    <Collapse in={open}>
      <span style={{ marginLeft: "6px" }} className="alert-text">
        copied ID
      </span>
    </Collapse>
  );
}

function Profile() {
  const { peer } = useContext(PeerContext);
  const [copied, setCopied] = useState(false);
  const [addconnection, setAddconnection] = useState<boolean>(false);
  function copy() {
    if (peer) {
      copyTextToClipboard(peer.id);
      setCopied(true);
    }
  }

  if (peer)
    return (
      <>
        <animated.div className="profile">
          <header>
            <div>
              <span>Oki ID</span>
              <Tooltip title="your id" placement="right">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={copy}
                  className="myid"
                >
                  {peer.id}
                </Button>
              </Tooltip>
              <CopiedToClipboard open={copied} set={setCopied} />
            </div>
            <IconButton aria-label="" onClick={copy}>
              <ShareOutlinedIcon />
            </IconButton>
          </header>
          <Connections addconnection={addconnection} />
        </animated.div>
        <div className="add-connection">
          <Fab
            variant="extended"
            color="primary"
            onClick={() => setAddconnection((s) => !s)}
          >
            <AddIcon />
            <span>add connection</span>
          </Fab>
        </div>
      </>
    );
  return <Redirect to="/" />;
}

function Connections({ addconnection }: { addconnection: boolean }) {
  return (
    <div className="connections">
      <header>
        <p>Connections</p>
      </header>
      <Collapse in={addconnection}>
        <div className="makeconnection">
          <InputBase
            inputProps={{ style: { color: "white", fontSize: "1.5rem" } }}
            placeholder="Enter ID to connect to"
          />
          <Button
            variant="outlined"
            style={{ color: "white", border: "1px solid white" }}
          >
            connect
          </Button>
        </div>
      </Collapse>
      <div className="connectionli"></div>
    </div>
  );
}

function Logo(props: any) {
  const { peer } = useContext(PeerContext);
  const Loogo = () => (
    <svg width={177} height={99} viewBox="0 0 177 99" {...props}>
      <title>{"Group 2"}</title>
      <g fill="#517DFF" fillRule="evenodd">
        <animated.path
          // @ts-ignore
          style={{
            ...useSpring({
              loop: !peer ? { reverse: true } : false,
              from: { opacity: 0 },
              to: { opacity: 1 },
              config: { frequency: 0.4 },
            }),
          }}
          d="M0 49.638c0-8.917 2.206-17.19 6.618-24.82 4.413-7.629 10.41-13.672 17.994-18.13C32.196 2.228 40.446 0 49.362 0c8.917 0 17.19 2.23 24.82 6.687 7.629 4.459 13.672 10.502 18.13 18.132C96.772 32.449 99 40.72 99 49.638c0 8.916-2.23 17.166-6.687 24.75C87.854 81.97 81.81 87.969 74.18 92.382 66.551 96.794 58.28 99 49.362 99c-9.008 0-17.281-2.137-24.819-6.412-7.537-4.274-13.512-10.157-17.925-17.649C2.206 67.448 0 59.014 0 49.638zm3-.362c0 8.387 2.08 16.174 6.241 23.362 4.16 7.189 9.762 12.88 16.803 17.072C33.086 93.903 40.721 96 48.951 96c8.505 0 16.369-2.097 23.593-6.29s12.94-9.883 17.146-17.072C93.897 65.45 96 57.617 96 49.138c0-8.386-2.103-16.196-6.31-23.43-4.206-7.235-9.899-12.995-17.077-17.28C65.434 4.143 57.684 2 49.363 2c-8.596 0-16.437 2.166-23.525 6.497-7.087 4.331-12.665 10.137-16.734 17.418C5.034 33.195 3 40.982 3 49.276z"
          fillRule="nonzero"
        />
        <path d="M174.416 48.994v49.518h-2.62V48.994zM170.224 33.405c0-.786.284-1.463.851-2.03.568-.568 1.289-.852 2.162-.852.786 0 1.463.284 2.03.852.568.567.852 1.244.852 2.03 0 .786-.284 1.463-.852 2.03-.567.568-1.244.852-2.03.852-.786 0-1.485-.306-2.096-.917s-.917-1.266-.917-1.965z" />
        <g>
          <path d="M128.21 69.168l-9.431 8.908v20.436h-2.62V0h2.62v75.063l28.95-26.986 1.704 1.441-19.257 17.947 22.663 31.047h-3.013z" />
        </g>
      </g>
    </svg>
  );

  return <Loogo />;
}

function copyTextToClipboard(text: string) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }

  document.body.removeChild(textArea);
}

export default Home;
