# 1. Install and Open React Developer Tools

Install React Developer Tools: If you haven't installed the extension, you can download it for Chrome or Firefox from the official site.

Open Developer Tools: Once installed, right-click on your React application in the browser, select Inspect, and navigate to the React tab to start inspecting your component tree.

# 2. Run the App Locally

Before debugging, ensure your React app is running

# 3. Inspect Component Tree

You will now see the component hierarchy in the React tab. You should see the App component along with its child components: Filter, AddMovie, and MovieList.

# 4. Inspect State and Props

App Component: Click on the App component in the tree. Under the Hooks section, you will see two state variables: originalMovies and filteredMovies. Verify the initial state is correctly populated with data from the movies array.

You should also see the handleFilterChange and addMovieHandler functions being triggered as actions, affecting the state.

MovieList Component: Click on the MovieList component and inspect the props being passed. Specifically, ensure that the movies prop is correctly receiving the filteredMovies list from the parent App component.

Filter Component: When clicking on Filter, ensure that the onFilterChange prop is passed properly. This function should trigger whenever a user inputs a filter value in the filter UI.

AddMovie Component: For AddMovie, make sure the addMovie prop is present and verify that it’s correctly hooked up to the addMovieHandler function from the parent App component.

# 5. Test Filtering Functionality

Use the React Developer Tools to manually test the filter logic:

Triggering Filters:
Go to the Filter component in your app UI and input different values for title and rating. This should trigger the handleFilterChange function in the parent App component.

In the React tab, inspect the state changes in the App component. Confirm that filteredMovies updates properly based on the filter conditions.

Check Filter Logic: If the list of movies does not update as expected when you filter by title or rating, check the handleFilterChange function for any potential logic errors. You can set breakpoints or log statements to verify the filtering conditions.
Verify that movies.filter is working correctly, especially the parsing of rating with parseInt(rating) and case-insensitive string matching with .toLowerCase().

# 6. Test Adding Movies

Next, test the movie-adding functionality:

Add a New Movie: Use the AddMovie component UI to add a new movie. This should trigger the addMovieHandler in the App component.

Check State Changes: Inspect the state of originalMovies and filteredMovies in the React tab. Confirm that both state variables are updated to include the newly added movie.

Ensure Movie List Updates: After adding the movie, the MovieList component should re-render with the updated list of movies. If the new movie is not displaying, check that the setOriginalMovies and setFilteredMovies calls are functioning as expected.

# 7. Use Profiler to Check Renders

To ensure that unnecessary re-renders are not occurring, you can use the Profiler in React Developer Tools:

Open the Profiler tab and click on Start profiling.
Interact with your app by adding a movie or filtering the list.
Check the profiler results to see if only the expected components are re-rendering. Excessive renders may indicate an inefficient state management approach.

# 8. Common Debugging Issues and Fixes

Issue: Filter Doesn't Work Properly:

If the list does not filter correctly when using the filter UI, inspect the handleFilterChange function. Ensure that:
The movies.filter() function is correctly applied.
The logic inside handleFilterChange correctly returns the filtered movie list based on title and rating.
Fix: Make sure the setFilteredMovies is called with the correct filtered array, e.g.:

If a movie added using the AddMovie component doesn’t appear in the MovieList, check if:
The addMovieHandler is correctly updating both originalMovies and filteredMovies.
Both state updates are performed atomically, ensuring the UI updates correctly.
Fix: Ensure that you are using the spread operator properly to create new arrays when updating state:

If the MovieList component doesn't reflect newly added movies, ensure that the component re-renders by verifying the filteredMovies prop is updated.

# 9. Document the Debugging Process

For each issue you discover, document your debugging steps. Here's an example template:

Issue: Filter not updating movie list correctly.
Steps Taken:
Checked handleFilterChange in the React Developer Tools.
Noticed that filteredMovies was not updating correctly.
Solution: Fixed the logic in handleFilterChange to ensure the correct condition is applied when filtering by both title and rating.
