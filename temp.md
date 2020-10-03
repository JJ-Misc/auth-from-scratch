What's up today.

- Add some form styling from Bulma. This has gone badly. I wasted a huge amount of time attempting to install node-sass. I spent about 4 hours on it. So dumb. I don't need Sass. And I don't even need individual Bulma modules. All I ever needed was the full library. Yet I went down 15 different rabbit holes on this. I was looking up things about node-gyp and libsass and npm and apt-get and blah, blah, blah.
- Before that, I wasted another 4 or 5 hours on a deep dive into how to use React hooks with forms, particularly registration and log-in forms. Good stuff, but beside the point.
- 

Review of useForm custom hook:

Pass an object containing initial values and a submit handler to the custom hook.

Track values, errors, touched, onSubmitting, and onBlue in local state. 

In use effect, after the component in which useForm was called has rendered, test whether there's a form element on the page with formRenderedRef.current, which is a reference to the form's DOM element and its current property. When the form is on the page, this will evaluate as true. When the form is not on the page, it will return false.

If there is a form on the page, then we need to reset that form using our initial values and also set formRenderedRef.current to false. That last step will cause the test to fail the next time useEffect is called. We also need to track all of the initial values object and only call useEffect when either the page re-renders or that object changes.

Next we need to define change and blur event handlers. These handlers will update our variables in local state. We also need a submit handler that will call the submit handler that we passed into the hook.

There are a couple of interesting things about the handlers. First, because React pools its synthetic events and reuses them, we need to call event.persist() in handleChange. This will ensure that whenever React finally gets around to executing setValues(), the name and value properties that we deconstructed from event.target will still exist. This makes no sense to me, because our name and value variables are part of the closure created by handleChange.

Finally, we need to return an object containing all of the methods and properties we just created.

My confusion comes into play when you have a form with several form components, e.g. an input component. 

