import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      marginLeft: "10px",
    },
  }))(Tooltip);
  
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  

export default function Skills(props) {
 
    return (

        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">My skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My creative skills & experiences.</div>
                            <p>I am a proficient in front end developer and back end web development, coding with HTML, CSS, and JS for the client-side and maintaining databases and infrastructure server-side. If you like to find out more, please click the button below.</p>
                            {/* <a href="model.html">Read more</a> */}
                        </div>
                        <div class="right">
                           <h2 className="right-title">Hover Over Me!</h2>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">JS SKills:</Typography>
                                <b>React</b><br></br><b>jQuery</b><br></br><b>node</b><br></br><b>express</b>
                                <br></br><b>MySql</b><br></br><b>NoSql</b>
                            </React.Fragment>
                            }
                        >
                            <Button>JavaScript</Button>
                        </HtmlTooltip>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">HTML Site Layout</Typography>
                              
                            </React.Fragment>
                            }
                        >
                            <Button>HTML</Button>
                        </HtmlTooltip>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">CSS Design</Typography>
                            </React.Fragment>
                            }
                        >
                            <Button>CSS</Button>
                        </HtmlTooltip>
                        <br></br>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">Project Management</Typography>
                                <b>Team Managment</b><b>Leadership</b><br></br><b>Organization</b><br></br><b>Problem Solving</b>
                                <br></br><b>Adaptability</b><br></br><b>Collaboration</b><br></br><b>Project Lifecycle</b>
                            </React.Fragment>
                            }
                        >
                            <Button>Project Management</Button>
                        </HtmlTooltip>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">IT Manager</Typography>
                                <b>Team Managment</b><b>Leadership</b><br></br><b>Organization</b><br></br><b>Problem Solving</b>
                                <br></br><b>Adaptability</b><br></br><b>Collaboration</b><br></br><b>Project Lifecycle</b><br></br>
                                <b>Client Relations</b><br></br><b>Vendor Relations</b><br></br><b>Audit accuracy</b>
                            </React.Fragment>
                            }
                        >
                            <Button>IT Management</Button>
                        </HtmlTooltip>
                        <br></br>
                        <HtmlTooltip
                            title={
                            <React.Fragment>
                                <Typography color="inherit">IT Manager</Typography>
                                <b>Client Relation</b><br></br><b>Account Management</b><br></br><b>Product Master</b>
                            </React.Fragment>
                            }
                        >
                            <Button>Technical Sales</Button>
                        </HtmlTooltip>
                        </div>
                    </div>
            </div>
        </section>


    )


}
