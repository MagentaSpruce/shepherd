function Button(props) {
  return (
    <a href="https://www.barnesandnoble.com/w/the-shepherd-tristan-nettles/1143322620">
      <button {...props}>{props.children}</button>
    </a>
  );
}

export default Button;
