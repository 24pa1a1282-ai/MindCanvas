function generateSession(){

  const mood = document.getElementById("mood").value;
  const duration = document.getElementById("duration").value;

  const sessions = {

    Focused:
      `Recommended Session:
      ${duration} Deep Focus +
      Rain Ambience +
      Notification Blocking`,

    Creative:
      `Recommended Session:
      ${duration} Creative Flow +
      Lo-fi Atmosphere +
      Brainstorm Environment`,

    Calm:
      `Recommended Session:
      ${duration} Calm Workspace +
      Piano Ambience +
      Minimal Distraction Mode`

  };

  document.getElementById("result").innerText =
    sessions[mood];

}
