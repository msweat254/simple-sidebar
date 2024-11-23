---

# Simple Sidebar

**Simple Sidebar** is a customizable and reusable React component that provides a responsive sidebar for your applications. It supports icons, logout functionality, and an expandable/collapsible design, making it ideal for dashboards, admin panels, or navigation menus.

---

## Features

- 🧩 **Customizable**: Supports dynamic background colors, fonts, and hover/expanded states.
- 🎨 **Icon Flexibility**: Use React components (like `react-icons`) or image URLs as icons.
- 🖱️ **Interactive**: Includes hover effects and a configurable "Logout" button.
- 📐 **Responsive Design**: Collapsible by default with smooth transitions.
- ⚙️ **Expandable**: Use the `isExpanded` prop to keep the sidebar always expanded.

---

## Installation

Install the package via npm:

```bash
npm install simple-sidebar
```

or via yarn:

```bash
yarn add simple-sidebar
```

---

## Basic Usage

Here’s how you can quickly integrate the `SimpleSidebar` into your React app:

```jsx
import React from "react";
import Sidebar from "simple-sidebar";
import { FaHome, FaCog } from "react-icons/fa";

const App = () => {
  const sidebarItems = [
    {
      text: "Home",
      icon: <FaHome />, // React Icon
      onClick: () => console.log("Home clicked"),
    },
    {
      text: "Settings",
      icon: <FaCog />, // React Icon
      onClick: () => console.log("Settings clicked"),
    },
  ];

  return (
    <Sidebar
      sidebarItems={sidebarItems}
      hasLogout={true}
      onLogout={() => console.log("Logged out")}
      backgroundColor="#1f2937"
      font="Arial, sans-serif"
      isExpanded={false} // Sidebar is collapsible by default
    />
  );
};

export default App;
```

---

## Props

The component accepts the following props for customization:

| **Prop Name**     | **Type**   | **Default**                       | **Description**                                                                                  |
| ----------------- | ---------- | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| `sidebarItems`    | `Array`    | `[]`                              | List of items to display in the sidebar. Each item should include `text`, `icon`, and `onClick`. |
| `hasLogout`       | `Boolean`  | `true`                            | Whether to display the logout button.                                                            |
| `onLogout`        | `Function` | `() => console.log("Logged out")` | Callback function triggered when the logout button is clicked.                                   |
| `backgroundColor` | `String`   | `"#ffffff"`                       | The background color of the sidebar.                                                             |
| `font`            | `String`   | `"Arial, sans-serif"`             | Font family for sidebar text.                                                                    |
| `isExpanded`      | `Boolean`  | `false`                           | If `true`, the sidebar will remain in the expanded state without hovering.                       |

---

## Styling

### Default Styles

The sidebar comes with default styles that can be overridden using CSS. These include:

- Sidebar background: `#1f2937`
- Collapsed width: `80px`
- Expanded width: `200px`

You can include your own styles if needed or use the `backgroundColor` and `font` props for quick customization.

---

### Example Sidebar Items

The `sidebarItems` array defines the menu items to display in the sidebar. Each item is an object with the following properties:

| **Key**   | **Type**     | **Description**                                |
| --------- | ------------ | ---------------------------------------------- |
| `text`    | `String`     | The label text for the sidebar item.           |
| `icon`    | `React.Node` | The icon to display (React Icon or image URL). |
| `onClick` | `Function`   | Function to execute when the item is clicked.  |

#### Example:

```javascript
const sidebarItems = [
  {
    text: "Dashboard",
    icon: <FaHome />, // React Icon
    onClick: () => console.log("Go to Dashboard"),
  },
  {
    text: "Profile",
    icon: <img src="https://example.com/profile-icon.png" alt="Profile" />, // Image
    onClick: () => console.log("Go to Profile"),
  },
];
```

---

## Advanced Usage

### Always-Expanded Sidebar

If you want the sidebar to always remain expanded, set `isExpanded` to `true`:

```jsx
<Sidebar
  sidebarItems={sidebarItems}
  hasLogout={true}
  onLogout={() => console.log("Logged out")}
  backgroundColor="#282c34"
  font="Roboto, sans-serif"
  isExpanded={true}
/>
```

### Custom Logout Button

If you want to customize the logout behavior:

```jsx
<Sidebar
  sidebarItems={sidebarItems}
  hasLogout={true}
  onLogout={() => {
    console.log("Custom logout logic");
    // Add your logout logic here
  }}
/>
```

---

## Complete Example

Here’s a complete example that demonstrates all features:

```jsx
import React from "react";
import Sidebar from "simple-sidebar";
import { FaHome, FaCog, FaUser } from "react-icons/fa";

const App = () => {
  const sidebarItems = [
    {
      text: "Home",
      icon: <FaHome />,
      onClick: () => alert("Navigating to Home"),
    },
    {
      text: "Profile",
      icon: <FaUser />,
      onClick: () => alert("Navigating to Profile"),
    },
    {
      text: "Settings",
      icon: <FaCog />,
      onClick: () => alert("Navigating to Settings"),
    },
  ];

  return (
    <Sidebar
      sidebarItems={sidebarItems}
      hasLogout={true}
      onLogout={() => alert("Logged out!")}
      backgroundColor="#1f2937"
      font="Tahoma, sans-serif"
      isExpanded={false}
    />
  );
};

export default App;
```

---

## Development

### Running Locally

To run this package locally for development:

1. Clone the repository:
   ```bash
   git clone https://github.com/msweat254/simple-sidebar.git
   cd simple-sidebar
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Issues and Feedback

If you encounter any issues or have feedback, feel free to [open an issue](https://github.com/msweat254/simple-sidebar/issues).

---

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.
