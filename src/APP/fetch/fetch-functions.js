export async function registerNewUser(body) {
  const r = await fetch(`${process.env.REACT_APP_URL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return r;
}

export async function validateNewUser(token) {
  await fetch(`${process.env.REACT_APP_URL}/auth/validate?token=${token}`);
}

export async function logInUser(body) {
  const r = await fetch(`${process.env.REACT_APP_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${body.email}:${body.password}`,
    },
  });
  if (r.status !== 201) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

// export async function logOutUser(token) {
//   const r = await fetch(`${process.env.REACT_APP_URL}/users`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log(r);
//   if (r.status === 401 || r.status === 404) {
//     return r;
//   } else {
//     const data = await r.json();
//     return data;
//   }
// }

export async function getUserData(token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 500) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function modifyUserData(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/users`, {
    method: "PATCH",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}
//
export async function createEvent(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/boxes`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 409) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function createNewEvent(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/boxes`, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 409) {
    console.log(r);
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function modifyEvent(body, token, currentName) {
  const r = await fetch(
    `${process.env.REACT_APP_URL}/boxes?name=${currentName}`,
    {
      method: "PATCH",
      body: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (r.status === 401 || r.status === 403 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllCurrentsEventsByEmail(token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/events/box/current`, {
    method: "GET",
    headers: {
      //      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 403 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllPastsEventsByEmail(token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/events/box/past`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 403 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function deletePastEvent(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/events/box/past`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllCurrentsEvents() {
  const r = await fetch(`${process.env.REACT_APP_URL}/events`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function addUserToaEvent(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/events/user`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function addAthlete(body, token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/athletes`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 403) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllAtheleteEvents(token) {
  const r = await fetch(`${process.env.REACT_APP_URL}/athletes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 403 || r.status === 404) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function createNewTestimonie(token, body) {
  const r = await fetch(`${process.env.REACT_APP_URL}/opinions`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401 || r.status === 409 || r.status === 500) {
    console.log(r);
    return r;
  } else {
    const data = await r.json();
    console.log(data);
    return data;
  }
}
