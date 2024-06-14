# App Step

- Head
- Body
  - Sidebar
    - Menu Items
- MainContainer
  - ButtonList
  - VideoContainer
    - VideoCard
-

Debouncing - Search function

- typing slow = 200ms
- typing fast = 30ms

Performance

- iphone pro max = 14 letter \* 1000 = 140000
- with debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- if difference b/b 2 key strokes is < 200ms - DECLINE API CALL
- > 200ms make an API CALL
-
