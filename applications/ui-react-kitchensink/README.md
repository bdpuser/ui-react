Couple of things to note in this app:

In most React applications the home route looks something like

```jsx
<Router>
  <Route path="/" component={HomePage} />
</Router>
```

In commerce platform applications, however, the home route should just render a redirect to the initialRoute like this:

```jsx
<CommercePlatform frameStrategy="iframe">
  <Router>
    <Route path="/" render={() => {
      return (
        <Redirect to={initialRoute} />
      )
    }} />
  </Router>
</CommercePlatform>
```
