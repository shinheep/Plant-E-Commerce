# Plantify

## Project Links

https://shinheep.github.io/Plantify/#/ 

## Project Description

For this project, I will be creating a full stack Plant E-Commerce Application! I wanted to combine something that I love (🪴) and the new technologies I recently learned to create a fully functional E-Commerce app. I will be building out the backend with Django, and the frontend with React. If completed correctly, users will be able to browse through different plants, click on each individual plant to see more info about that plant, add to their cart, and checkout their cart after they've signed up/logged in as a user.

View the GIF of my project here:

![Alt Text](https://res.cloudinary.com/dxqwpud0l/image/upload/v1643590469/Screen_Recording_2022-01-30_at_4_49_37_PM_AdobeCreativeCloudExpress_1_uxnark.gif)

## Wireframes

![Wireframes](https://res.cloudinary.com/dxqwpud0l/image/upload/v1639627338/Screen_Shot_2021-12-15_at_8.01.29_PM_ogwdap.png "Wireframes")


#### MVP Items

- Populate front end with Plant API Data ✅
    - Plants Page ✅
    - Individual Plant Page ✅
- Mobile-First Responsive Design ✅
- CSS Styling ✅

#### PostMVP Items

- Search Function for Plants ✅
- About Me Section ✅
- Django Backend ✅
    - Plant API ✅
    - User Authentication ✅
- Shopping Cart Functionality
- Sign Up/Log In Functionality
- Checkout Cart as a User
- Add to Cart Function
- Delete from Cart Function


## Components

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Nav Bar | Medium | 2 hrs| 1 hrs | 
| Plants Page | High | 5 hrs| 4 hrs |
| Individual Plant Page | High | 5 hrs| 6 hrs |
| Search Bar | Medium | 4 hrs| 8 hrs |
| Shopping Cart | Medium | 8 hrs| 3 hrs |
| Check Out | Low | 8 hrs| 0 hrs |
| Sign Up | High | 6 hrs| 3 hrs | 
| Log In | High | 6 hrs| 3 hrs | 
| Footer | Low | 1 hrs| 0.5 hrs | 

| Total | | 45 hrs | 28.5 hrs

## Additional Libraries

LottieFiles
Font Awesome

## Code Snippet

I am proud of this code snippet of my controlled search bar.

```js
const handleSearch = (searchTerm) => {
      console.log("Plant found!");
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
         const newPlantList = plantList.filter((plant) => {
           console.log('plant', plant)
           console.log('plantName', plant.props.children[0].props.children.props.alt)
             return Object.values(plant.props.children[0].props.children.props.alt)
              .join("")
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
         })
         setSearchResults(newPlantList);
      } else {
          setSearchResults(plantList);
      }
  };
```

