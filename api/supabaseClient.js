// require('dotenv').config();
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SUPABASE_ANON_KEY } from "@env";


const SUPABASE_URL = 'https://uqlttxpgrghnwkhbjwia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbHR0eHBncmdobndraGJqd2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5MTU1NTQsImV4cCI6MjAwODQ5MTU1NH0.1Vt-SuLeZB7PMgLSRDfc6pPz7rnTjHiGCAVtb8erksI';
// const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    localStorage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
});

export default supabase;
