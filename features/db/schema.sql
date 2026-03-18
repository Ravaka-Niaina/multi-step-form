
-- Dumped from database version 18.2
-- Dumped by pg_dump version 18.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addOns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."addOns" (
    id character varying(50) NOT NULL
);


--
-- Name: chosenAddOns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."chosenAddOns" (
    id integer NOT NULL,
    "isMonthlyId" integer NOT NULL,
    "addOnsId" character varying(50) NOT NULL
);


--
-- Name: chosenAddOns_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."chosenAddOns" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."chosenAddOns_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: chosenPlans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."chosenPlans" (
    id integer NOT NULL,
    "isMonthlyId" integer NOT NULL,
    "planId" character varying(50) NOT NULL
);


--
-- Name: chosenPlans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."chosenPlans" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."chosenPlans_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: isPlanMonthly; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."isPlanMonthly" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "isPlanMonthly" integer
);



--
-- Name: isPlanMonthly_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."isPlanMonthly" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."isPlanMonthly_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: plans; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plans (
    id character varying(50) NOT NULL
);

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    "emailAddress" character varying(100) NOT NULL,
    "phoneNumber" character varying(20) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: addOns addOns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."addOns"
    ADD CONSTRAINT "addOns_pkey" PRIMARY KEY (id);


--
-- Name: chosenAddOns chosenAddOns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenAddOns"
    ADD CONSTRAINT "chosenAddOns_pkey" PRIMARY KEY (id);


--
-- Name: chosenPlans chosenPlans_isMonthlyId_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenPlans"
    ADD CONSTRAINT "chosenPlans_isMonthlyId_unique" UNIQUE ("isMonthlyId");


--
-- Name: chosenPlans chosenPlans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenPlans"
    ADD CONSTRAINT "chosenPlans_pkey" PRIMARY KEY (id);


--
-- Name: isPlanMonthly isPlanMonthly_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."isPlanMonthly"
    ADD CONSTRAINT "isPlanMonthly_pkey" PRIMARY KEY (id);


--
-- Name: plans plans_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);


--
-- Name: users users_emailAddress_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_emailAddress_unique" UNIQUE ("emailAddress");


--
-- Name: users users_phoneNumber_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users_phoneNumber_unique" UNIQUE ("phoneNumber");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: chosenAddOns chosenAddOns_addOnsId_addOns_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenAddOns"
    ADD CONSTRAINT "chosenAddOns_addOnsId_addOns_id_fk" FOREIGN KEY ("addOnsId") REFERENCES public."addOns"(id);


--
-- Name: chosenAddOns chosenAddOns_isMonthlyId_isPlanMonthly_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenAddOns"
    ADD CONSTRAINT "chosenAddOns_isMonthlyId_isPlanMonthly_id_fk" FOREIGN KEY ("isMonthlyId") REFERENCES public."isPlanMonthly"(id);


--
-- Name: chosenPlans chosenPlans_isMonthlyId_isPlanMonthly_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenPlans"
    ADD CONSTRAINT "chosenPlans_isMonthlyId_isPlanMonthly_id_fk" FOREIGN KEY ("isMonthlyId") REFERENCES public."isPlanMonthly"(id);


--
-- Name: chosenPlans chosenPlans_planId_plans_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."chosenPlans"
    ADD CONSTRAINT "chosenPlans_planId_plans_id_fk" FOREIGN KEY ("planId") REFERENCES public.plans(id);


--
-- Name: isPlanMonthly isPlanMonthly_userId_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."isPlanMonthly"
    ADD CONSTRAINT "isPlanMonthly_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

