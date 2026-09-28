-- ============================================================
-- Osanebi D1 Seed
-- Full reset + repopulation
--
-- Password for both users: password123
-- ============================================================

PRAGMA foreign_keys = ON;


-- ============================================================
-- CLEAR EXISTING DATA
-- ============================================================
-- Children first, parents last.

DELETE FROM publisher_insights;
DELETE FROM reports;
DELETE FROM events;
DELETE FROM tasks;
DELETE FROM feedback;
DELETE FROM session_playtesters;
DELETE FROM sessions;
DELETE FROM games;
DELETE FROM studio_members;
DELETE FROM studios;
DELETE FROM users;


-- ============================================================
-- USERS
-- ============================================================

INSERT INTO users (
    id,
    email,
    password_hash,
    name,
    role,
    bio,
    skills,
    studio_name,
    created_at
) VALUES (
    'seed-user-studio',
    'studio@osanebi.dev',
    '$2b$10$6YJij8jLEKRvFoG8PmRwTuQtAtgV7eNWjZNsZgsQjTR24yhrndzfG',
    'Yenum (Studio)',
    'studio',
    'Indie game studio owner and developer.',
    '["game-design","programming","production"]',
    'Scyte Studios',
    CURRENT_TIMESTAMP
);

INSERT INTO users (
    id,
    email,
    password_hash,
    name,
    role,
    bio,
    skills,
    studio_name,
    created_at
) VALUES (
    'seed-user-playtester',
    'playtester@osanebi.dev',
    '$2b$10$6YJij8jLEKRvFoG8PmRwTuQtAtgV7eNWjZNsZgsQjTR24yhrndzfG',
    'Alex (Playtester)',
    'playtester',
    'Experienced action-game playtester.',
    '["combat","platforming","usability-testing"]',
    NULL,
    CURRENT_TIMESTAMP
);



-- ============================================================
-- STUDIO
-- ============================================================

INSERT INTO studios (
    id,
    owner_user_id,
    name,
    description,
    created_at
) VALUES (
    'seed-studio-1',
    'seed-user-studio',
    'Scyte Studios',
    'Indie studio building narrative action games.',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- STUDIO MEMBERSHIP
-- ============================================================

INSERT INTO studio_members (
    id,
    studio_id,
    user_id
) VALUES (
    'seed-studio-member-1',
    'seed-studio-1',
    'seed-user-studio'
);


-- ============================================================
-- GAME
-- ============================================================

INSERT INTO games (
    id,
    studio_id,
    title,
    genre,
    platform,
    build_version,
    build_branch,
    pitch_summary,
    created_at
) VALUES (
    'seed-game-1',
    'seed-studio-1',
    'Fracture Point',
    'Action-Adventure',
    'PC',
    '0.4.2',
    'playtest/wave-3',
    'A fast, precise 2.5D action game about breaking and rebuilding time.',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- SESSION
-- ============================================================

INSERT INTO sessions (
    id,
    game_id,
    status,
    start_time,
    end_time,
    notes,
    created_at
) VALUES (
    'seed-session-1',
    'seed-game-1',
    'live',
    CURRENT_TIMESTAMP,
    NULL,
    'Wave 3 internal playtest.',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- SESSION ↔ PLAYTESTER
-- ============================================================

INSERT INTO session_playtesters (
    id,
    session_id,
    user_id
) VALUES (
    'seed-session-playtester-1',
    'seed-session-1',
    'seed-user-playtester'
);


-- ============================================================
-- EVENTS
-- ============================================================

INSERT INTO events (
    id,
    session_id,
    type,
    timestamp,
    payload
) VALUES (
    'seed-event-1',
    'seed-session-1',
    'gameplay',
    CURRENT_TIMESTAMP,
    '{"event":"checkpoint_reached","checkpoint":2}'
);

INSERT INTO events (
    id,
    session_id,
    type,
    timestamp,
    payload
) VALUES (
    'seed-event-2',
    'seed-session-1',
    'reaction',
    CURRENT_TIMESTAMP,
    '{"event":"player_reaction","reaction":"confusion","context":"parry_prompt"}'
);

INSERT INTO events (
    id,
    session_id,
    type,
    timestamp,
    payload
) VALUES (
    'seed-event-3',
    'seed-session-1',
    'bug',
    CURRENT_TIMESTAMP,
    '{"event":"player_fell","location":"checkpoint_2","cause":"dash"}'
);


-- ============================================================
-- FEEDBACK
-- ============================================================

INSERT INTO feedback (
    id,
    session_id,
    author_user_id,
    category,
    severity,
    content,
    tags,
    created_at
) VALUES (
    'seed-feedback-1',
    'seed-session-1',
    'seed-user-playtester',
    'bug',
    'high',
    'Player falls through the floor after dashing into the second checkpoint.',
    '["dash","checkpoint","collision"]',
    CURRENT_TIMESTAMP
);

INSERT INTO feedback (
    id,
    session_id,
    author_user_id,
    category,
    severity,
    content,
    tags,
    created_at
) VALUES (
    'seed-feedback-2',
    'seed-session-1',
    'seed-user-playtester',
    'ux',
    'medium',
    'Took a while to notice the parry prompt — it blends into the background.',
    '["combat","readability","parry"]',
    CURRENT_TIMESTAMP
);

INSERT INTO feedback (
    id,
    session_id,
    author_user_id,
    category,
    severity,
    content,
    tags,
    created_at
) VALUES (
    'seed-feedback-3',
    'seed-session-1',
    'seed-user-playtester',
    'balance',
    'low',
    'The second encounter feels slightly too easy after learning the parry timing.',
    '["combat","difficulty","encounter"]',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- REPORT
-- ============================================================

INSERT INTO reports (
    id,
    session_id,
    type,
    content,
    created_at
) VALUES (
    'seed-report-1',
    'seed-session-1',
    'qa_summary',
    'Wave 3 playtest identified one high-severity collision bug and one medium-severity readability issue. Combat fundamentals are performing well, but the parry prompt needs stronger visual contrast.',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- TASKS
-- ============================================================

INSERT INTO tasks (
    id,
    game_id,
    session_id,
    title,
    description,
    priority,
    status,
    source,
    created_at
) VALUES (
    'seed-task-1',
    'seed-game-1',
    'seed-session-1',
    'Fix checkpoint floor collision',
    'Investigate the collision failure that causes the player to fall through the floor after dashing into checkpoint two.',
    'P0',
    'open',
    'feedback',
    CURRENT_TIMESTAMP
);

INSERT INTO tasks (
    id,
    game_id,
    session_id,
    title,
    description,
    priority,
    status,
    source,
    created_at
) VALUES (
    'seed-task-2',
    'seed-game-1',
    'seed-session-1',
    'Improve parry prompt readability',
    'Increase contrast and visual prominence of the parry prompt during combat.',
    'P1',
    'in_progress',
    'feedback',
    CURRENT_TIMESTAMP
);

INSERT INTO tasks (
    id,
    game_id,
    session_id,
    title,
    description,
    priority,
    status,
    source,
    created_at
) VALUES (
    'seed-task-3',
    'seed-game-1',
    NULL,
    'Review second encounter difficulty',
    'Review encounter balance following playtester feedback and determine whether enemy pressure should be increased.',
    'P2',
    'open',
    'manual',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- PUBLISHER INSIGHT
-- ============================================================

INSERT INTO publisher_insights (
    id,
    game_id,
    score,
    rationale,
    recommended_next_steps,
    created_at
) VALUES (
    'seed-publisher-insight-1',
    'seed-game-1',
    78,
    'Fracture Point demonstrates a strong gameplay identity and promising combat loop. Current concerns are concentrated around polish and readability rather than the core concept.',
    'Fix the checkpoint collision issue, improve parry prompt readability, and run another playtest wave focused on combat clarity and encounter balance.',
    CURRENT_TIMESTAMP
);


-- ============================================================
-- FINISH
-- ============================================================
