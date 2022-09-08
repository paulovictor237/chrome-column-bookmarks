This weekend in the free time I worked on implementing a feature that allows sorting the bookmarks trough drag & drop.
In the past I already worked on custom drag & drop solutions using react-dnd and I also played around with the awesome [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd).
This time though I'm dealing with grids instead of list, so react-dnd would have been a bit too complex to use (at least for my weekend free time) and react-beautiful-dnd doesn't work with grids.
So, I investigated a bit and have noticed that react-sortable-hoc seemed to suit well my use case.
Just like its name suggest, react-sortable-hoc is a set of Higher Order Components that makes your components "sortable". It works with both list and grids.
The library didn't work out of the box for me though, because:

CSS grids are not supported yet. I noticed that there was an open PR that add CSS grids support and it was working fine for me, so I updated it and sent-it again. Since it has not been merged yet, I had to deal by myself with it in the code by "simulating" the CSS grid gap property using margings, at least until the PR is merged.

react-sortable-hoc requires the "sortable" list item component to be the direct child of the "sortable" list/grid, so I had to make a few changes to the components structure to make them work.

react-sortable-hoc adds some CSS on top of the "sortable" items that might requires some adjustments to your own CSS. In my specific case for example I had to turn off my own transition while the item is dragging the item and turn it on after the drop.

That said, the library works well! (Even if I admit I'm a bit worried that will stop be officially maintained soon).

I also had a lot of fun playing around with the Chrome API for moving bookmarks, discovering what seems to be a really old bug of it, and implementing an optimistic update (so that we can update the bookmark position in the state without having to wait for the Chrome API response).
