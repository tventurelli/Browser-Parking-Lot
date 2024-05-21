import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import "./ParkingLotForm.css";

const PRIORITIES = {
    Low: "Low",
    Medium: "Medium",
    High: "High"
}

export default function ParkingLotForm( { addItem }) {

    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
        setDate(e.target.value);
      }
    
    
      function handleLinkChange(e) {
        setLink(e.target.value);
      }
    
    
      function handleDescriptionChange(e) {
        setDescription(e.target.value);
      }
    
    
      function handlePriorityChange(e) {
        setPriority(e.target.value);
      }
    
    
      function handleSubmit(e) {
        e.preventDefault();
        const [y, M, d] = date.split('-');  
        const formattedDate = `${M}/${d}/${y}`;


        addItem(formattedDate, link, description, priority);
        setDate('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium); 
      }
    
    return (
        <Form data-bs-theme="dark" className="parking-lot-form" onSubmit={handleSubmit}>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-date">
                    Date
                </Label>
                <Input
                id="link-date"
                type="date"
                name="date"
                valie={date}
                onChange={handleDateChange}
                required
                />
            </FormGroup>
        <FormGroup className="parking-lot-row">
        <Label htmlFor="link-url">
          Link
        </Label>
        <Input
          id="link-url"
          name="url"
          type="url"
          value={link}
          onChange={handleLinkChange}
          required
        />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-description">
          Description
        </Label>
        <Input
          id="link-description"
          name="description"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.High}
          id="prio-high"
          checked={priority === PRIORITIES.High}
          onChange={handlePriorityChange}
        />
        {' '}
        <Label htmlFor="prio-high" className="me-3">
          High
        </Label>
        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.Medium}
          id="prio-medium"
          checked={priority === PRIORITIES.Medium}
          onChange={handlePriorityChange}
        />
        {' '}
        <Label htmlFor="prio-medium" className="me-3">
          Medium
        </Label> 
        <Input
          name="radio-priority"
          type="radio"
          value={PRIORITIES.Low}
          id="prio-low"
          checked={priority === PRIORITIES.Low}
          onChange={handlePriorityChange}
        />
        {' '}
        <Label htmlFor="prio-low" className="me-3">
          Low
        </Label>                
      </FormGroup>
            <Button type='submit'>
                Submit
            </Button>
        </Form>
    );
}