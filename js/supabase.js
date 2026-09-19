// js/supabase.js
const SUPABASE_URL = 'https://pscqpmtciovvyahnsqdz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...'; // ใส่ Key ของคุณที่นี่
const BUCKET_NAME = 'cloudshare-files';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
