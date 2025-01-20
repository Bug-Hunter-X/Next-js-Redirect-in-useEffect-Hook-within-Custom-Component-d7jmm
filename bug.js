```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a different page if the condition is met
    if (someCondition) {
      router.push('/some-other-page');
    }
  }, []);

  return (
    <div>This is my component</div>
  );
}
```