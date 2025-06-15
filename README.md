# Dynamic Reducer Injection Redux Toolkit

By default, Redux uses a single global store. For small to medium-scale applications, this is generally not an issue and doesn't affect performance. However, for large-scale applications, this can become a problem because the initial load time can be slow due to all reducers being loaded at once. That's why we need a technique to inject reducers on a per-page basis — especially when those reducers are only meant to be used on specific pages and not globally.

For more details, feel free to watch my YouTube video here: 
