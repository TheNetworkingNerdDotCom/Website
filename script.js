function HowSpanningTreeWorksQ1(button) {
  button.outerHTML = "<div>If a broadcast frame was received on either switch, it would flood out all ports except the one it was received on. This means if PC1 sends the broadcast frame, SW1 will forward it out both F0/1 & F0/2 interfaces. SW2 would receive that same broadcast frame on both it's F0/3 & F0/4 links, sending two copies towards PC2, also forwarding a copy of each back towards SW1 on both links.</div >";
}

