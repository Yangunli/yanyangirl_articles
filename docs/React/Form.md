# [react] Form

```
<form className="form" autoComplete='off'>
  <label className="form">
    <label htmlFor="username">Enter your name: </label>
    <input type="text" name="username" autoComplete='off' required>
  </label>
  {/* MAC 在password type時，給予new-passwprd，使其不自動填寫input field */}
  <label className="form-example">
    <label htmlFor="password">Enter your email: </label>
    <input type="password" name="password" autoComplete='new-passwprd' required>
  </label>
</form>
```
