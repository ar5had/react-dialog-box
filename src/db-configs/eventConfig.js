import 
{ 
  DROPDOWN, DIRECT_MENU, SECTION, DIVIDER, TABS_TEXTAREA,
  INPUT, INPUT_DT, SELECT_BOX, AUTO, FULL, HALF 
} 
from '../constants/dialogBoxConstants';

export const config = {
  id: "event-dialog",
  title: "New Event:New Event",
  dropdown: {
    type: DROPDOWN,
    config: [
      {label: 'Event', accessCharPos: 4},
      {label: 'Edit', accessCharPos: 0},
      {label: 'View', accessCharPos: 0},
      {label: 'Options', accessCharPos: 0}           
    ]
  },
  directMenu: {
    type: DIRECT_MENU,
    config: [
      {label: 'Save and Close', icon: 'save-close', dropdown: null},
      {label: 'Invite Attendees', icon: 'address', dropdown: null},
      {label: 'Privacy', icon: 'security', dropdown: ["Public Event", "Show Time and Date Only", "Private Event"]},
      {label: 'Attach', icon: 'attach', dropdown: ["Webpage"]},
      {label: 'Delete', icon: 'delete', dropdown: null}  
    ]
  },
  sections: {
    type: SECTION,
    config: [
      {
        items: [
          {
            label: 'Title', accessCharPos: 1, type: INPUT, width: FULL,
            dataType: 'text', placeholder: 'New Event', boundToTitleBar: true
          },
          {
            label: 'Location', accessCharPos: 0, type: INPUT,
            dataType: 'text', width: FULL
          },
          {
            label: 'Category', accessCharPos: 7, type: SELECT_BOX,
            dataType: 'text', width: HALF, options: ['None', 'Anniversary', 'Birthday', 'Buisness', 'Calls']
          },
          {
            label: 'Calendar', accessCharPos: 0, type: SELECT_BOX,
            dataType: 'text', width: HALF, options: ['Home']
          },
        ]
      },
      {
        items: [
          {
            label: 'Start', accessCharPos: 0, type: INPUT_DT, width: AUTO,
            dataType: 'date/time', 
          },
          {
            label: 'End(U)', accessCharPos: 4, type: INPUT_DT, width: AUTO,
            dataType: 'date/time', 
          }
        ]
      },
      {
        items: [
          {
            label: 'Repeat', accessCharPos: 0, type: SELECT_BOX, width: AUTO,
            dataType: 'text', options: ['Does not repeat', 'Daily', 'Weekly', 'Every Weekday',
            'Biweekly', 'Monthly', 'Yearly']
          }
        ]
      },
      {
        items: [
          {
            label: 'Reminder', accessCharPos: 2, type: SELECT_BOX, width: AUTO,
            dataType: 'text', options: ['No reminder', DIVIDER, '0 minutes before', '5 minutes before',
            '15 minutes before', DIVIDER, '1 hour before',
            '2 hours before', '12 hours before', DIVIDER, '1 day before', '2 days before', '1 week before']
          }
        ]
      },
      {
        items: [
          {
            type: TABS_TEXTAREA,
            width: FULL,
            config: [
              {
                label: 'Description', accessCharPos: 6, dataType: 'text'
              },
              {
                label: 'Attachments', accessCharPos: 5, dataType: 'text'
              },
              {
                label: 'Attendees', accessCharPos: 4, dataType: 'text'
              }
            ]
          }
        ]
      }
    ]
  }
};