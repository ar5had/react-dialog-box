import 
{ 
  DROPDOWN, DIRECT_MENU, SECTION, DIVIDER, TABS_TEXTAREA,
  INPUT, INPUT_DT, SELECT_BOX, AUTO, FULL, HALF 
} 
from '../constants/dialogBoxConstants';

export const config = {
  id: "task-dialog",
  title: "New Task:New Task",
  dropdown: {
    type: DROPDOWN,
    config: [
      {label: 'Task', accessCharPos: 0,
        dropdown: ["New", DIVIDER, "Save", "Save and Close",
         "Delete", "Page Setup", "Print", DIVIDER, "!Close"]},
      {label: 'Edit', accessCharPos: 0,
        dropdown: ["!Undo", "!Redo", DIVIDER, "Cut",
         "Copy", "Paste", DIVIDER, "Select All"]},
      {label: 'View', accessCharPos: 0,
        dropdown: ["Toolbars", DIVIDER, "Show Related Links"]},
      {label: 'Options', accessCharPos: 0,
        dropdown: ["Invite Attendees", "Attach", "Show Timezones",
          DIVIDER, "Priority", "Privacy", "Status", "Show Time as"]
      }           
    ]
  },
  directMenu: {
    type: DIRECT_MENU,
    config: [
      {label: 'Save and Close', icon: 'save-close', dropdown: null},
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
            dataType: 'text', placeholder: 'New Task', boundToTitleBar: true
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
            label: 'Due Date', accessCharPos: 1, type: INPUT_DT, width: AUTO,
            dataType: 'date/time', 
          },
          {
            label: 'Status', accessCharPos: 2, type: SELECT_BOX,
            dataType: 'text', width: AUTO, options: ['Not specified', 'Need Actions',
            'In progress', 'Completed on', 'Cancelled']
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
            width: FULL,
            type: TABS_TEXTAREA,
            config: [
              {
                label: 'Description', accessCharPos: 6, dataType: 'text'
              },
              {
                label: 'Attachments', accessCharPos: 5, dataType: 'text'
              }
            ]
          }
        ]
      }
    ]
  }
};