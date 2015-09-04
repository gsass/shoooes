# M.Gemi Code Audition

## To implement:
- One product description page
    - Desktop: Chrome
    - Mobile: also Chrome
- Components:
    - Carousel
        - "360 view" button
        - Paging display
    - Quick view
        - Quick descroption area
        - Size selection modal
        - Color selection modal
    - Description Area
    - Widgets
        - Sharing services box
        - Chat box

## Tools to use:
- Bootstrap CSS for grid layout
- Custom CSS for styling
- Backbone.js for state/selective rendering
- Amplience dynamic image resizing API for carousel images

## Implementation steps:
- Static HTML DOM mock w/vanilla bootstrap
- Static DOM mock for modals, in separate files
- Styles for desktop
- Styles for mobile
- Split carousel out into backbone view
    - Template renders empty
    - Determine viewport size
    - Re-render with appropriately-scaled images
- Split controls into separate view
    - Make model (local for now) for shoe order
    - Write basic "is order ready" (return (color and size) or so) fn
    - View renders with "add to bag" disabled initially
    - View listens to change event on model, enables button
- Add model change event listener to reload images on shoe color change
- Add modals to controls area (ugh)
    - Two views, which initially render as just the title
    - click event on the title to expand
    - click event anywhere not in the modal to collapse?
    - on field click, set model and collapse
- Break chatbox and "scroll to top" into views
    - Chatbox: empty view, but room for expansion
    - scroll to top: render hidden, integrate scroll or get position, re-render
- Refine js views
    - Support for animation
    - Support for swipe events

## Notes:
- To make sizes/colors work as both a modal an carousel, I need to decide:
    - Use divs for options?
    - Some horrifying amount of styling for a fieldset of checkboxes/radios?

## Questions:
- What support for modals does bootstrap provide?
    - How do I style to let them expand/float over other content while maintaining the same bottom y-coordinate?
- Should I try using require() at first, or just load a gob of js to start?
    - Probably the latter, for speed alone.
