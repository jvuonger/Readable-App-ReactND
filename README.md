# Udacity React Nanodegree - Project 2 - Readable

## Project Overview
For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

-----------------

## View Requirements:
### Default (Root)
- should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- should have a control for adding a new post

### Category View
- identical to the default view, but filtered to only include posts with the selected category

### Post Detail View
- should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- should list all of the comments for that post
- should have controls to edit or delete the post
- should have a control to add a new comment.
- implement comment form however you want (inline, modal, etc.) 
- comments should also have controls for editing or deleting

### Create/Edit View
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form