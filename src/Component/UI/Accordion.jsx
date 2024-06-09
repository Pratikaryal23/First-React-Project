import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordions = () => {
  return (
    <>
      {/* <Accordion slotProps={{ transition: { unmountOnExit: true } }} /> */}
      <div className="w-10/12 mx-auto my-5">
        {" "}
        <Accordion elevation={2}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} id="panel-header" aria-controls="panel-content"class="hii" >
            Header
          </AccordionSummary>
          <AccordionDetails class="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste culpa quo dolor fuga, eligendi aliquam sit tempora reiciendis
            ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab consectetur corporis tempore aspernatur aperiam, praesentium distinctio! Nihil harum et fugiat reprehenderit, rem, aut enim blanditiis, recusandae eligendi labore dolores.
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={2}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} id="panel-header" aria-controls="panel-content">
            Header
          </AccordionSummary>
          <AccordionDetails class="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste culpa quo dolor fuga, eligendi aliquam sit tempora reiciendis
            ratione!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo perferendis earum dolor praesentium rem repudiandae impedit, atque eveniet error et consectetur fugit laboriosam. Quod est, non corporis voluptatibus ipsum quo?
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={2}>
          <AccordionSummary  expandIcon={<ExpandMoreIcon/>} id="panel-header" aria-controls="panel-content">
            Header
          </AccordionSummary>
          <AccordionDetails class="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste culpa quo dolor fuga, eligendi aliquam sit tempora reiciendis
            ratione! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi tempora eligendi nostrum inventore fuga praesentium placeat, saepe amet molestiae unde aspernatur cumque autem adipisci possimus dicta? Id, rerum quidem.
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={2}>
          <AccordionSummary   expandIcon={<ExpandMoreIcon/>} id="panel-header" aria-controls="panel-content">
            Header
          </AccordionSummary>
          <AccordionDetails class="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste culpa quo dolor fuga, eligendi aliquam sit tempora reiciendis
            ratione! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis doloribus laudantium soluta a placeat, et suscipit aliquid deleniti, natus odit ipsam deserunt odio omnis. Ad placeat velit adipisci provident delectus!
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={2}>
          <AccordionSummary   expandIcon={<ExpandMoreIcon/>} id="panel-header" aria-controls="panel-content">
            Header
          </AccordionSummary>
          <AccordionDetails class="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            iste culpa quo dolor fuga, eligendi aliquam sit tempora reiciendis
            ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, tempora placeat. Aut nesciunt eum maiores labore esse explicabo non tempore odit ut sint! Laborum ipsa cupiditate nulla neque quam quo!
          </AccordionDetails>
        </Accordion>
        
      </div>
    </>
  );
};

export default Accordions;
