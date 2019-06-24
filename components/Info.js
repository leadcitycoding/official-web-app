const note = {
  margin: '6em'
}

export default function Info() {
  return(
    <div>
      <h4 style={note}>More info at <a href="https://nextjs.org/" target="_blank">nextjs.org</a></h4>

      <h5 style={note}>Clone the <a href="https://github.com/Usheninte/starter-nextjs"><i class="fab fa-2x fa-github"></i>  repo</a></h5>

      <h7>Built by <a href="https://usheninte.xyz">@Usheninte</a>. Open Source :)</h7>
    </div>
  );
}

